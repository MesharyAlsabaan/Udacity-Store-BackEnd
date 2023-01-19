import { Request, Response } from 'express'
import { pool } from '../database'
import * as bcrypt from 'bcryptjs'
var jwt = require('jsonwebtoken')

//Sign Up
export const createUser = async (req: Request, res: Response) => {
  const { firstName, lastName, address, city, email, password } = req.body

  let id = Math.floor(Math.random() * 10000)

  const emailResult = await (await pool.query('SELECT * FROM users WHERE email = $1', [email])).rows
  if (emailResult.length > 0) {
    res.status(400)
    res.send('Email is Already Exist')
    return
  }
  

  await createUserModels(id, firstName, lastName, address, city, email, password)

  res.send('Thank you for creating account')
  return
}

export async function createUserModels(
  id: number,
  firstName: string,
  lastName: string,
  address: string,
  city: string,
  email: string,
  password: string,
) {
  let salt = await bcrypt.genSalt()
  let hashedPassword = await hashPassword(password, salt)
  await pool.query(
    'INSERT INTO users(userid,firstname,lastname,address,city, email,password,salt) VALUES($1, $2,$3,$4,$5,$6,$7,$8)',
    [id, firstName, lastName, address, city, email, hashedPassword, salt]
  )

  return true;
}

// Login user and return token
export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body
  const user = await (await pool.query('SELECT * FROM users WHERE email = $1', [email])).rows

  if (user.length > 0) {
    const correctCredential = await validateLogin(password, user[0].salt, user[0].password)

    delete user[0].password
    delete user[0].salt

    if (correctCredential) {
      let token = jwt.sign({ user: user }, process.env.TOKEN_SECRET)
      res.json(token)
      return true
    } else {
      res.status(400)
      res.send('Email or password is not correct')
      return false
    }
  } else {
    res.status(400)
    res.send('Email is not exist')
    return false
  }
}

//Get all users
export const getUsers = async (req: Request, res: Response) => {
  try {
    jwt.verify(req.headers.token, process.env.TOKEN_SECRET)
  } catch (err) {
    res.status(401)
    res.send('Invalid token')
    return false
  }
  const allUsers = await getAllUsersModel();
  res.send(allUsers)
  return true
}
export async function getAllUsersModel(){
 return await (await pool.query('SELECT * FROM users')).rows
}
//Get user by id
export const getUser = async (req: Request, res: Response) => {
  try {
    jwt.verify(req.headers.token, process.env.TOKEN_SECRET)
  } catch (err) {
    res.status(401)
    res.send('Invalid token')
    return false
  }
  let id = req.params

  const user = await getUserByIdModal(id.id)
  if (user.length > 0) {
    res.send(user)
    return true
  }
  res.send('user is not exist')
  return false
}

export async function getUserByIdModal(id:any) {
  return await (await pool.query('SELECT * FROM users WHERE userid = $1', [id])).rows
} 
//Delete user
export const deleteUser = async (req: Request, res: Response) => {
  try {
    jwt.verify(req.headers.token, process.env.TOKEN_SECRET)
  } catch (err) {
    res.status(401)
    res.send('Invalid token')
    return false
  }
  let id = req.params
  console.log('delete ', id)

  const user = await (await pool.query('Delete FROM users WHERE userid = $1', [id.id])).rows
  res.send('The user is not exist anymore')
  return true
}
//Update user
export const updateUser = async (req: Request, res: Response) => {
  try {
    jwt.verify(req.headers.token, process.env.TOKEN_SECRET)
  } catch (err) {
    res.status(401)
    res.send('Invalid token')
    return false
  }
  let id = req.params
  const { email } = req.body

  const user = await (await pool.query('SELECT * FROM users WHERE userid = $1', [id.id])).rows
  if (user.length > 0) {
    await (
      await pool.query('UPDATE users SET email = $1 WHERE userid = $2', [email, id.id])
    ).rows
    res.send('the email was updated')
    return true
  }
  res.send('user is not exist')
  return false
}

async function validateLogin(enterPassword: string, salt: string, password: string) {
  const hash = await bcrypt.hash(enterPassword, salt)
  return hash === password
}

function hashPassword(password: string, salt: string): Promise<string> {
  return bcrypt.hash(password, salt)
}


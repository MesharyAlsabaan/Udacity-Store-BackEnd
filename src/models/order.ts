import { Request, Response } from 'express'
import { pool } from '../database'
var jwt = require('jsonwebtoken')

export const createOrder = async (req: Request, res: Response) => {
  try {
    jwt.verify(req.headers.token, process.env.TOKEN_SECRET)
  } catch (err) {
    res.status(401)
    res.send('Invalid token')
    return false
  }
  let id = Math.floor(Math.random() * 10000)
  let userId = req.params

 await createOrderModel(id,userId.userId);

  res.send('The order was created :)')
}

export async function createOrderModel(id:number,userId:any){
  await pool.query('INSERT INTO orders(id,status,userid) VALUES($1, $2,$3)', [
    id,
    'processing',
    userId
  ])
return true;


}

// Get order by userId
export const getOrder = async (req: Request, res: Response) => {
  try {
    jwt.verify(req.headers.token, process.env.TOKEN_SECRET)
  } catch (err) {
    res.status(401)
    res.send('Invalid token')
    return false
  }
  let id = req.params
  const order = await getOrderModel(id.userId);

  if (order.length > 0) {
    res.send(order)
    return true
  } else {
    res.send('There is no orders :(')
    return false
  }
}

export async function getOrderModel(id:any){
 return await (await pool.query('SELECT * FROM orders WHERE userid = $1', [id])).rows
}


export const deleteOrder = async (req: Request, res: Response) => {
  
  try {
    jwt.verify(req.headers.token, process.env.TOKEN_SECRET)
  } catch (err) {
    res.status(401)
    res.send('Invalid token')
    return false
  }
  let id = req.params
  
  
  const order = await (await pool.query('Delete FROM orders WHERE userId = $1', [id.userId])).rows
  res.send('The order is not exist anymore')
  return true
}

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

  await pool.query('INSERT INTO orders(id,status,userid) VALUES($1, $2,$3)', [
    id,
    'processing',
    userId.userId
  ])

  res.send('The order was created :)')
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
  const order = await (await pool.query('SELECT * FROM orders WHERE userid = $1', [id.userId])).rows

  if (order.length > 0) {
    res.send(order)
    return true
  } else {
    res.send('There is no orders :(')
    return false
  }
}

import { Request, Response } from 'express'
import { pool } from '../database'
var jwt = require('jsonwebtoken')
import {getAllProductsModel, getProductModel } from '../models/product';


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

  await createOrderModel(id, userId.userId)

  res.send('The order was created :)')
}

export async function createOrderModel(id: number, userId: any) {
  await pool.query('INSERT INTO orders(id,status,userid) VALUES($1, $2,$3)', [
    id,
    'processing',
    userId
  ])
  return true
}

// Get order by userId
export const getOrder = async (req: Request, res: Response) => {
  // try {
  //   jwt.verify(req.headers.token, process.env.TOKEN_SECRET)
  // } catch (err) {
  //   res.status(401)
  //   res.send('Invalid token')
  //   return false
  // }
  let id = req.params
  const order = await getOrderModel(id.userId)

  if (order.length > 0) {
    res.send(order)
    return true
  } else {
    res.send('There is no orders :(')
    return false
  }
}

export async function getOrderModel(id: any) {
  return await (
    await pool.query('SELECT * FROM orders WHERE userid = $1', [id])
  ).rows
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

export const addCard = async (req: Request, res: Response) => {
  let userId = req.params
  let orderId = Math.floor(Math.random() * 10000)
  let productId = await getAllProductsModel();
  console.log(productId[0].id);
  

  createOrderModel(orderId, userId.userId).then((value) => {
    createOrderDetails(orderId, productId[0].id)

  });
  
}

export const getCart = async (req: Request, res: Response) => {
  let userId = req.params
  
  let orders = await getOrderModel(userId.userId)

  let order = [];
  let newOrders = [];
  let products = [];


  for (let i = 0; i < orders.length ; i++) {
    order =  await (
      await pool.query('SELECT * FROM order_products WHERE order_id = $1', [orders[i].id])
    ).rows
    products = await getProductModel(order[0]?.product_id)
    newOrders.push(products[0])
  }
  newOrders = newOrders.filter(elements => {
    return elements != undefined;
   });   
  res.send(newOrders)
  return newOrders;
}

export async function createOrderDetails(orderId: any, productId: any) {
 
  
  
  let id = Math.floor(Math.random() * 10000)

  await pool.query(
    'INSERT INTO order_products(id,quantity,product_id,order_id) VALUES($1, $2,$3,$4)',
    [id, '2', productId, orderId]
  )
  return true
}
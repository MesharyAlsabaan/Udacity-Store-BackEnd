import { Request, Response } from 'express'
import { pool } from '../database'
var jwt = require('jsonwebtoken')

export const createProduct = async (req: Request, res: Response) => {
  // try {
  //   jwt.verify(req.headers.token, process.env.TOKEN_SECRET)
  // } catch (err) {
  //   res.status(401)
  //   res.send('Invalid token')
  //   return false
  // }
  let id = Math.floor(Math.random() * 10000)
  const { name, price } = req.body
  await createProductModel(id,name,price)
  res.send('The product was created :)')
}

export async function createProductModel(id:number, name:any,price:any){
  await pool.query('INSERT INTO products(id,name,price) VALUES($1, $2,$3)', [id, name, price])
  return true;
}

export const getAllProducts = async (req: Request, res: Response) => {
  const allProducts = await getAllProductsModel()
  
  res.send(allProducts);
  return true;
}

export async function getAllProductsModel() {
   const allProducts= await (await pool.query('SELECT * FROM products')).rows;
   return allProducts;
   
}
export const getProduct = async (req: Request, res: Response) => {
  let id = req.params
  const product = await getProductModel(id.id);
  if (product.length > 0) {
    res.send(product)
    return true
  } else {
    res.send('There is no product :(')
    return false
  }
}

export async function getProductModel(id:any) {
  return await (await pool.query('SELECT * FROM products WHERE id = $1', [id])).rows
}


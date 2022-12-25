import supertest from 'supertest'
import app from '../index'
import {createOrder} from '../models/order'
import { Request, Response } from 'express'
import {createUserModels,getAllUsersModel,getUserByIdModal} from '../models/users'

// create a request object
const request = supertest(app)
let token = ''
let id: any = ''
let orderId = ''

describe('create user', () => {
  it('test create user endpoint', async () => {
    const response = await request.post('/user').set('Content-type', 'application/json').send({
      email: 'tes1t@gmail.com',
      password: 'Mm1212',
      firstName: 'dkdk',
      lastName: 'lalal',
      city: 'Riyadh',
      address: 'Irqah'
    })
    expect(response.status).toBe(200)
  })
})

describe('login user', () => {
  it('test login user endpoint', async () => {
    const response = await request
      .post('/user/login')
      .set('Content-type', 'application/json')
      .send({
        email: 'tes1t@gmail.com',
        password: 'Mm1212'
      })

    expect(response.status).toBe(200)
  })
})


describe('get all users', () => {
  it('test get all users endpoint', async () => {
    const token = await getToken()
    const response = await request
      .get('/user')
      .set('Content-type', 'application/json')
      .set('token', `${token}`)
    expect(response.status).toBe(200)
    id = response.body[0].userid
  })
})

describe('get user by id', () => {
  it('test get user by id endpoint', async () => {
    const response = await request
      .get(`/user/${id}`)
      .set('Content-type', 'application/json')
      .set('token', `${token}`)
    expect(response.status).toBe(200)
  })
})

describe('create product', () => {
  it('test create product endpoint', async () => {
    const response = await request
      .post('/product')
      .set('Content-type', 'application/json')
      .set('token', `${token}`)
      .send({
        name: 'perfume',
        price: '500'
      })
    expect(response.status).toBe(200)
  })
})

describe('get product', () => {
  it('test get product endpoint', async () => {
    const response = await request
      .get('/product')
      .set('Content-type', 'application/json')
      .set('token', `${token}`)
    expect(response.status).toBe(200)
  })
})
describe('gel all products', () => {
  it('test get all products endpoint', async () => {
    const response = await request
      .get(`/product`)
      .set('Content-type', 'application/json')
      .set('token', `${token}`)
    expect(response.status).toBe(200)
  })
})

describe('create order', () => {
  it('test create order endpoint', async () => {
    const response = await request
      .post(`/order/${id}`)
      .set('Content-type', 'application/json')
      .set('token', `${token}`)
    expect(response.status).toBe(200)
  })
})
describe('get order', () => {
  it('test create order endpoint', async () => {
    const response = await request
      .get(`/order/${id}`)
      .set('Content-type', 'application/json')
      .set('token', `${token}`)
      orderId = response.body[0].id;      
    expect(response.status).toBe(200)
  })
})
describe('delete order', () => {
  it('test delete order endpoint', async () => {
    const response = await request
      .delete(`/order/${id}`)
      .set('Content-type', 'application/json')
      .set('token', `${token}`)
    expect(response.status).toBe(200)
  })
})





describe('update user', () => {
  it('test update user endpoint', async () => {
    const response = await request
      .put(`/user/${id}`)
      .set('Content-type', 'application/json')
      .set('token', `${token}`)
      .send({
        email: 'tes2t@gmail.com'
      })
    expect(response.status).toBe(200)
  })
})
describe('delete user', () => {
  it('test delete user endpoint', async () => {
    const response = await request
      .delete(`/user/${id}`)
      .set('Content-type', 'application/json')
      .set('token', `${token}`)
    expect(response.status).toBe(200)
  })
})

async function getToken() {
  const response = await request.post('/user/login').set('Content-type', 'application/json').send({
    email: 'tes1t@gmail.com',
    password: 'Mm1212'
  })
  token = response.body
  return response.body
}





describe('create user model method', () => {
  it('test create user model method', async () => {
   let result = await createUserModels(1,'meshari','alsabaan','ir','Riyadh','me@gmail.com','MM');

   expect(result).toBe(true);
  })
})
describe('get all user model method', () => {
  it('test get all user model method', async () => {
    await getAllUsersModel();
  })
})
describe('get user by id model method', () => {
  it('test get user by id model method', async () => {
    await getUserByIdModal(1);
  })
})
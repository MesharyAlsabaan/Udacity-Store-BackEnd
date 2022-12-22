import supertest from 'supertest'
import app from '../index'

// create a request object
const request = supertest(app)
const token = '';

describe('create user', () => {
  
  it('test create user endpoint', async () => {
    const response = await request.post('/user').set('Content-type','application/json').send({
        email:'tes1t@gmail.com',
        password:'Mm1212',
        firstName:'dkdk',
        lastName:'lalal',
        city:'Riyadh',
        address:'Irqah',
    });    
    expect(response.status).toBe(200)
  })
})

describe('login user', () => {
    it('test login user endpoint', async () => {
      const response = await request.post('/user/login').set('Content-type','application/json').send({
          email:'tes1t@gmail.com',
          password:'Mm1212',
      });       
         
      expect(response.status).toBe(200)
    })
  })

describe('get all users', () => {
  it('test get all users endpoint', async () => {
    const token = await getToken();  
          
    const response = await request.get('/user').set('Content-type','application/json').send({
       token:token
    });
    expect(response.status).toBe(200)
  })
})

describe('create product', () => {
    it('test create product endpoint', async () => {
      const token = await getToken();    
      const response = await request.post('/product').set('Content-type','application/json').send({
         name:'perfume',
         price:'500',
         token:token
      });
      expect(response.status).toBe(200)
    })
  })

describe('create product', () => {
    it('test create product endpoint', async () => {
      const token = await getToken();    
      const response = await request.get('/product').set('Content-type','application/json').send({
         token:token
      });
      expect(response.status).toBe(200)
    })
  })


async function getToken(){
  const response = await request.post('/user/login').set('Content-type','application/json').send({
    email:'tes1t@gmail.com',
    password:'Mm1212',
  });       
    return response.body;
}




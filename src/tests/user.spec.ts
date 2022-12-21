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
    let token = await request.post('/user/login').set('Content-type','application/json').send({
        email:'test@gmail.com',
        password:'Mm1212',
    });
    token = token.body;
    return token;
}








// export const createUser = async (req: Request, res: Response) => {
//     const { firstName, lastName, address, city, email, password } = req.body
  
//     let id = Math.floor(Math.random() * 10000)
  
//     const emailResult = await (await pool.query('SELECT * FROM users WHERE email = $1', [email])).rows
//     if (emailResult.length > 0) {
//       res.send('Email is Already Exist')
//       return
//     }
//     let salt = await bcrypt.genSalt()
//     let hashedPassword = await hashPassword(password, salt)
//     await pool.query(
//       'INSERT INTO users(userid,firstname,lastname,address,city, email,password,salt) VALUES($1, $2,$3,$4,$5,$6,$7,$8)',
//       [id, firstName, lastName, address, city, email, hashedPassword, salt]
//     )
//     res.send('Thank you for creating account')
//   }
import express, { Application, Request, Response } from 'express'
import morgan from 'morgan'
import * as dotenv from 'dotenv'


import indexRoutes from './routes/index';
var bodyParser = require('body-parser')



dotenv.config()

const PORT = process.env.PORT || 3000
const app: Application = express()
app.use(morgan('short'))

 app.get('/',  (req: Request, res: Response)  => {
  res.send('users');
})
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.listen(PORT, () => {
  console.log(`Server is starting at prot:${PORT}`)
})
app.use(indexRoutes);


export default app
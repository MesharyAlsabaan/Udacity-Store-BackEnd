import { getUser } from '../models/users';
import { response, Router } from "express";
import {getUsers,createUser,login, updateUser, deleteUser} from '../models/users';
import { createOrder, getOrder } from '../models/order';
import { createProduct, getAllProducts, getProduct } from '../models/product';
const router = Router();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

//User End Points
router.get('/user', getUsers);
router.get('/user/:id', getUser);
router.put('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);
router.post('/user',jsonParser, createUser);
router.post('/user/login',jsonParser, login);
router.get('/',jsonParser,function(){
    response.send('Welcome to the store');
})



//Order End Points
router.post('/order/:userId',jsonParser, createOrder);
router.get('/order/:userId',jsonParser,getOrder);


//Product End Points
router.post('/product',jsonParser, createProduct);
router.get('/product',jsonParser,getAllProducts);
router.get('/product/:id',jsonParser,getProduct);




export default router;
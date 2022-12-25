
import { getUser } from '../models/users';
import { response, Router } from "express";
import {getUsers,createUser,login, updateUser, deleteUser} from '../models/users';
import { createOrder, deleteOrder, getOrder } from '../models/order';
import { createProduct, getAllProducts, getProduct } from '../models/product';
const router = Router();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })




//Order End Points
router.post('/order/:userId',jsonParser, createOrder);
router.get('/order/:userId',jsonParser,getOrder);
router.delete('/order/:userId',jsonParser,deleteOrder);






export default router;
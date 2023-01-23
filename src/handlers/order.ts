
import { getUser } from '../models/users';
import { response, Router } from "express";
import {getUsers,createUser,login, updateUser, deleteUser} from '../models/users';
import { addCard, createOrder, deleteCart, deleteOrder, getCart, getOrder } from '../models/order';
import { createProduct, getAllProducts, getProduct } from '../models/product';
const router = Router();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })




//Order End Points
router.post('/order/:userId',jsonParser, createOrder);
router.post('/addCard/:userId',jsonParser, addCard);
router.get('/cart/:userId',jsonParser, getCart);

router.get('/order/:userId',jsonParser,getOrder);
router.delete('/order/:userId',jsonParser,deleteOrder);
router.delete('/cart/:orderPId',jsonParser,deleteCart);






export default router;
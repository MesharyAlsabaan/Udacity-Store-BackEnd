import { Router } from "express";
import { createProduct, getAllProducts, getProduct } from '../models/product';
const router = Router();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json()







//Product End Points
router.post('/product',jsonParser, createProduct);
router.get('/product',jsonParser,getAllProducts);
router.get('/product/:id',jsonParser,getProduct);





export default router;
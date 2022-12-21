"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var users_1 = require("../models/users");
var express_1 = require("express");
var users_2 = require("../models/users");
var order_1 = require("../models/order");
var product_1 = require("../models/product");
var router = (0, express_1.Router)();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
//User End Points
router.get('/user', users_2.getUsers);
router.get('/user/:id', users_1.getUser);
router.put('/user/:id', users_2.updateUser);
router.delete('/user/:id', users_2.deleteUser);
router.post('/user', jsonParser, users_2.createUser);
router.post('/user/login', jsonParser, users_2.login);
router.get('/', jsonParser, function () {
    express_1.response.send('Welcome to the store');
});
//Order End Points
router.post('/order/:userId', jsonParser, order_1.createOrder);
router.get('/order/:userId', jsonParser, order_1.getOrder);
//Product End Points
router.post('/product', jsonParser, product_1.createProduct);
router.get('/product', jsonParser, product_1.getAllProducts);
router.get('/product/:id', jsonParser, product_1.getProduct);
exports.default = router;

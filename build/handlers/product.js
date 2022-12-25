"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var product_1 = require("../models/product");
var router = (0, express_1.Router)();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
//Product End Points
router.post('/product', jsonParser, product_1.createProduct);
router.get('/product', jsonParser, product_1.getAllProducts);
router.get('/product/:id', jsonParser, product_1.getProduct);
exports.default = router;

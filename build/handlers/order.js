"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var order_1 = require("../models/order");
var router = (0, express_1.Router)();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
//Order End Points
router.post('/order/:userId', jsonParser, order_1.createOrder);
router.get('/order/:userId', jsonParser, order_1.getOrder);
router.delete('/order/:userId', jsonParser, order_1.deleteOrder);
exports.default = router;

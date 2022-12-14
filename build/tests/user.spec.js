"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var supertest_1 = __importDefault(require("supertest"));
var index_1 = __importDefault(require("../index"));
var order_1 = require("../models/order");
var users_1 = require("../models/users");
var order_2 = require("../models/order");
var product_1 = require("../models/product");
// create a request object
var request = (0, supertest_1.default)(index_1.default);
var token = '';
var id = '';
var orderId = '';
describe('create user', function () {
    it('test create user endpoint', function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request.post('/user').set('Content-type', 'application/json').send({
                        email: 'tes1t@gmail.com',
                        password: 'Mm1212',
                        firstName: 'dkdk',
                        lastName: 'lalal',
                        city: 'Riyadh',
                        address: 'Irqah'
                    })];
                case 1:
                    response = _a.sent();
                    expect(response.status).toBe(200);
                    return [2 /*return*/];
            }
        });
    }); });
});
describe('login user', function () {
    it('test login user endpoint', function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request
                        .post('/user/login')
                        .set('Content-type', 'application/json')
                        .send({
                        email: 'tes1t@gmail.com',
                        password: 'Mm1212'
                    })];
                case 1:
                    response = _a.sent();
                    expect(response.status).toBe(200);
                    return [2 /*return*/];
            }
        });
    }); });
});
describe('get all users', function () {
    it('test get all users endpoint', function () { return __awaiter(void 0, void 0, void 0, function () {
        var token, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getToken()];
                case 1:
                    token = _a.sent();
                    return [4 /*yield*/, request
                            .get('/user')
                            .set('Content-type', 'application/json')
                            .set('token', "".concat(token))];
                case 2:
                    response = _a.sent();
                    expect(response.status).toBe(200);
                    id = response.body[0].userid;
                    return [2 /*return*/];
            }
        });
    }); });
});
describe('get user by id', function () {
    it('test get user by id endpoint', function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request
                        .get("/user/".concat(id))
                        .set('Content-type', 'application/json')
                        .set('token', "".concat(token))];
                case 1:
                    response = _a.sent();
                    expect(response.status).toBe(200);
                    return [2 /*return*/];
            }
        });
    }); });
});
describe('create product', function () {
    it('test create product endpoint', function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request
                        .post('/product')
                        .set('Content-type', 'application/json')
                        .set('token', "".concat(token))
                        .send({
                        name: 'perfume',
                        price: '500'
                    })];
                case 1:
                    response = _a.sent();
                    expect(response.status).toBe(200);
                    return [2 /*return*/];
            }
        });
    }); });
});
describe('get product', function () {
    it('test get product endpoint', function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request
                        .get('/product')
                        .set('Content-type', 'application/json')
                        .set('token', "".concat(token))];
                case 1:
                    response = _a.sent();
                    expect(response.status).toBe(200);
                    return [2 /*return*/];
            }
        });
    }); });
});
describe('gel all products', function () {
    it('test get all products endpoint', function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request
                        .get("/product")
                        .set('Content-type', 'application/json')
                        .set('token', "".concat(token))];
                case 1:
                    response = _a.sent();
                    expect(response.status).toBe(200);
                    return [2 /*return*/];
            }
        });
    }); });
});
describe('create order', function () {
    it('test create order endpoint', function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request
                        .post("/order/".concat(id))
                        .set('Content-type', 'application/json')
                        .set('token', "".concat(token))];
                case 1:
                    response = _a.sent();
                    expect(response.status).toBe(200);
                    return [2 /*return*/];
            }
        });
    }); });
});
describe('get order', function () {
    it('test create order endpoint', function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request
                        .get("/order/".concat(id))
                        .set('Content-type', 'application/json')
                        .set('token', "".concat(token))];
                case 1:
                    response = _a.sent();
                    orderId = response.body[0].id;
                    expect(response.status).toBe(200);
                    return [2 /*return*/];
            }
        });
    }); });
});
describe('delete order', function () {
    it('test delete order endpoint', function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request
                        .delete("/order/".concat(id))
                        .set('Content-type', 'application/json')
                        .set('token', "".concat(token))];
                case 1:
                    response = _a.sent();
                    expect(response.status).toBe(200);
                    return [2 /*return*/];
            }
        });
    }); });
});
describe('update user', function () {
    it('test update user endpoint', function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request
                        .put("/user/".concat(id))
                        .set('Content-type', 'application/json')
                        .set('token', "".concat(token))
                        .send({
                        email: 'tes2t@gmail.com'
                    })];
                case 1:
                    response = _a.sent();
                    expect(response.status).toBe(200);
                    return [2 /*return*/];
            }
        });
    }); });
});
describe('delete user', function () {
    it('test delete user endpoint', function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request
                        .delete("/user/".concat(id))
                        .set('Content-type', 'application/json')
                        .set('token', "".concat(token))];
                case 1:
                    response = _a.sent();
                    expect(response.status).toBe(200);
                    return [2 /*return*/];
            }
        });
    }); });
});
function getToken() {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request.post('/user/login').set('Content-type', 'application/json').send({
                        email: 'tes1t@gmail.com',
                        password: 'Mm1212'
                    })];
                case 1:
                    response = _a.sent();
                    token = response.body;
                    return [2 /*return*/, response.body];
            }
        });
    });
}
describe('create user model method', function () {
    it('test create user model method', function () { return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, users_1.createUserModels)(1, 'meshari', 'alsabaan', 'ir', 'Riyadh', 'me@gmail.com', 'MM')];
                case 1:
                    result = _a.sent();
                    expect(result).toBe(true);
                    return [2 /*return*/];
            }
        });
    }); });
});
describe('get all user model method', function () {
    it('test get all user model method', function () { return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, users_1.getAllUsersModel)()];
                case 1:
                    result = _a.sent();
                    expect(result[0].userid).toBe(1);
                    return [2 /*return*/];
            }
        });
    }); });
});
describe('get user by id model method', function () {
    it('test get user by id model method', function () { return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, users_1.getUserByIdModal)(1)];
                case 1:
                    result = _a.sent();
                    console.log(result);
                    expect(result[0].userid).toBe(1);
                    return [2 /*return*/];
            }
        });
    }); });
});
describe('create order model method', function () {
    it('test create order model method', function () { return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, order_2.createOrderModel)(100, 1)];
                case 1:
                    result = _a.sent();
                    expect(result).toBe(true);
                    return [2 /*return*/];
            }
        });
    }); });
});
describe('get order by userid model method', function () {
    it('test get order by userid model method', function () { return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, order_1.getOrderModel)(1)];
                case 1:
                    result = _a.sent();
                    expect(result[0].userid).toBe('1');
                    return [2 /*return*/];
            }
        });
    }); });
});
describe('create product model method', function () {
    it('test create product model method', function () { return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, product_1.createProductModel)(1, 'car', '500')];
                case 1:
                    result = _a.sent();
                    expect(result).toBe(true);
                    return [2 /*return*/];
            }
        });
    }); });
});
describe('get all products model method', function () {
    it('test get all products model method', function () { return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, product_1.getAllProductsModel)()];
                case 1:
                    result = _a.sent();
                    expect(result[0].price).toBe(500);
                    return [2 /*return*/];
            }
        });
    }); });
});
describe('get product by id model method', function () {
    it('test get product by id model method', function () { return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, product_1.getProductModel)(1)];
                case 1:
                    result = _a.sent();
                    expect(result[0].id).toBe(1);
                    return [2 /*return*/];
            }
        });
    }); });
});

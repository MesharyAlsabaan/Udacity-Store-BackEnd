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
// create a request object
var request = (0, supertest_1.default)(index_1.default);
var token = '';
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
                        address: 'Irqah',
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
                case 0: return [4 /*yield*/, request.post('/user/login').set('Content-type', 'application/json').send({
                        email: 'tes1t@gmail.com',
                        password: 'Mm1212',
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
                    return [4 /*yield*/, request.get('/user').set('Content-type', 'application/json').send({
                            token: token
                        })];
                case 2:
                    response = _a.sent();
                    expect(response.status).toBe(200);
                    return [2 /*return*/];
            }
        });
    }); });
});
describe('create product', function () {
    it('test create product endpoint', function () { return __awaiter(void 0, void 0, void 0, function () {
        var token, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getToken()];
                case 1:
                    token = _a.sent();
                    return [4 /*yield*/, request.post('/product').set('Content-type', 'application/json').send({
                            name: 'perfume',
                            price: '500',
                            token: token
                        })];
                case 2:
                    response = _a.sent();
                    expect(response.status).toBe(200);
                    return [2 /*return*/];
            }
        });
    }); });
});
describe('create product', function () {
    it('test create product endpoint', function () { return __awaiter(void 0, void 0, void 0, function () {
        var token, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getToken()];
                case 1:
                    token = _a.sent();
                    return [4 /*yield*/, request.get('/product').set('Content-type', 'application/json').send({
                            token: token
                        })];
                case 2:
                    response = _a.sent();
                    expect(response.status).toBe(200);
                    return [2 /*return*/];
            }
        });
    }); });
});
function getToken() {
    return __awaiter(this, void 0, void 0, function () {
        var token;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request.post('/user/login').set('Content-type', 'application/json').send({
                        email: 'test@gmail.com',
                        password: 'Mm1212',
                    })];
                case 1:
                    token = _a.sent();
                    token = token.body;
                    return [2 /*return*/, token];
            }
        });
    });
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

"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.deleteUser = exports.getUserByIdModal = exports.getUser = exports.getAllUsersModel = exports.getUsers = exports.login = exports.createUserModels = exports.createUser = void 0;
var database_1 = require("../database");
var bcrypt = __importStar(require("bcryptjs"));
var jwt = require('jsonwebtoken');
//Sign Up
var createUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, firstName, lastName, address, city, email, password, id, emailResult;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, firstName = _a.firstName, lastName = _a.lastName, address = _a.address, city = _a.city, email = _a.email, password = _a.password;
                id = Math.floor(Math.random() * 10000);
                return [4 /*yield*/, database_1.pool.query('SELECT * FROM users WHERE email = $1', [email])];
            case 1: return [4 /*yield*/, (_b.sent()).rows];
            case 2:
                emailResult = _b.sent();
                if (emailResult.length > 0) {
                    res.status(400);
                    res.send('Email is Already Exist');
                    return [2 /*return*/];
                }
                return [4 /*yield*/, createUserModels(id, firstName, lastName, address, city, email, password)];
            case 3:
                _b.sent();
                res.send('Thank you for creating account');
                return [2 /*return*/];
        }
    });
}); };
exports.createUser = createUser;
function createUserModels(id, firstName, lastName, address, city, email, password) {
    return __awaiter(this, void 0, void 0, function () {
        var salt, hashedPassword;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, bcrypt.genSalt()];
                case 1:
                    salt = _a.sent();
                    return [4 /*yield*/, hashPassword(password, salt)];
                case 2:
                    hashedPassword = _a.sent();
                    return [4 /*yield*/, database_1.pool.query('INSERT INTO users(userid,firstname,lastname,address,city, email,password,salt) VALUES($1, $2,$3,$4,$5,$6,$7,$8)', [id, firstName, lastName, address, city, email, hashedPassword, salt])];
                case 3:
                    _a.sent();
                    return [2 /*return*/, true];
            }
        });
    });
}
exports.createUserModels = createUserModels;
// Login user and return token
var login = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, password, user, correctCredential, token;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, email = _a.email, password = _a.password;
                return [4 /*yield*/, database_1.pool.query('SELECT * FROM users WHERE email = $1', [email])];
            case 1: return [4 /*yield*/, (_b.sent()).rows];
            case 2:
                user = _b.sent();
                if (!(user.length > 0)) return [3 /*break*/, 4];
                return [4 /*yield*/, validateLogin(password, user[0].salt, user[0].password)];
            case 3:
                correctCredential = _b.sent();
                delete user[0].password;
                delete user[0].salt;
                if (correctCredential) {
                    token = jwt.sign({ user: user }, process.env.TOKEN_SECRET);
                    res.json(token);
                    return [2 /*return*/, true];
                }
                else {
                    res.send('Email or password is not correct');
                    return [2 /*return*/, false];
                }
                return [3 /*break*/, 5];
            case 4:
                res.send('Email is not exist');
                return [2 /*return*/, false];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.login = login;
//Get all users
var getUsers = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var allUsers;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                try {
                    jwt.verify(req.headers.token, process.env.TOKEN_SECRET);
                }
                catch (err) {
                    res.status(401);
                    res.send('Invalid token');
                    return [2 /*return*/, false];
                }
                return [4 /*yield*/, getAllUsersModel()];
            case 1:
                allUsers = _a.sent();
                res.send(allUsers);
                return [2 /*return*/, true];
        }
    });
}); };
exports.getUsers = getUsers;
function getAllUsersModel() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, database_1.pool.query('SELECT * FROM users')];
                case 1: return [4 /*yield*/, (_a.sent()).rows];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.getAllUsersModel = getAllUsersModel;
//Get user by id
var getUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                try {
                    jwt.verify(req.headers.token, process.env.TOKEN_SECRET);
                }
                catch (err) {
                    res.status(401);
                    res.send('Invalid token');
                    return [2 /*return*/, false];
                }
                id = req.params;
                return [4 /*yield*/, getUserByIdModal(id)];
            case 1:
                user = _a.sent();
                if (user.length > 0) {
                    res.send(user);
                    return [2 /*return*/, true];
                }
                res.send('user is not exist');
                return [2 /*return*/, false];
        }
    });
}); };
exports.getUser = getUser;
function getUserByIdModal(id) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, database_1.pool.query('SELECT * FROM users WHERE userid = $1', [id.id])];
                case 1: return [4 /*yield*/, (_a.sent()).rows];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.getUserByIdModal = getUserByIdModal;
//Delete user
var deleteUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                try {
                    jwt.verify(req.headers.token, process.env.TOKEN_SECRET);
                }
                catch (err) {
                    res.status(401);
                    res.send('Invalid token');
                    return [2 /*return*/, false];
                }
                id = req.params;
                console.log('delete ', id);
                return [4 /*yield*/, database_1.pool.query('Delete FROM users WHERE userid = $1', [id.id])];
            case 1: return [4 /*yield*/, (_a.sent()).rows];
            case 2:
                user = _a.sent();
                res.send('The user is not exist anymore');
                return [2 /*return*/, true];
        }
    });
}); };
exports.deleteUser = deleteUser;
//Update user
var updateUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, email, user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                try {
                    jwt.verify(req.headers.token, process.env.TOKEN_SECRET);
                }
                catch (err) {
                    res.status(401);
                    res.send('Invalid token');
                    return [2 /*return*/, false];
                }
                id = req.params;
                email = req.body.email;
                return [4 /*yield*/, database_1.pool.query('SELECT * FROM users WHERE userid = $1', [id.id])];
            case 1: return [4 /*yield*/, (_a.sent()).rows];
            case 2:
                user = _a.sent();
                if (!(user.length > 0)) return [3 /*break*/, 5];
                return [4 /*yield*/, database_1.pool.query('UPDATE users SET email = $1 WHERE userid = $2', [email, id.id])];
            case 3: return [4 /*yield*/, (_a.sent()).rows];
            case 4:
                _a.sent();
                res.send('the email was updated');
                return [2 /*return*/, true];
            case 5:
                res.send('user is not exist');
                return [2 /*return*/, false];
        }
    });
}); };
exports.updateUser = updateUser;
function validateLogin(enterPassword, salt, password) {
    return __awaiter(this, void 0, void 0, function () {
        var hash;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, bcrypt.hash(enterPassword, salt)];
                case 1:
                    hash = _a.sent();
                    return [2 /*return*/, hash === password];
            }
        });
    });
}
function hashPassword(password, salt) {
    return bcrypt.hash(password, salt);
}

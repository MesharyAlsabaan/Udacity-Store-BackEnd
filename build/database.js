"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
var pg_1 = require("pg");
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var _a = process.env, NODE_ENV = _a.NODE_ENV, POSTGRES_USER = _a.POSTGRES_USER, POSTGRES_PASSWORD = _a.POSTGRES_PASSWORD, POSTGRES_HOST = _a.POSTGRES_HOST, POSTGRES_DATABASE = _a.POSTGRES_DATABASE, POSTGRES_DATABASE_test = _a.POSTGRES_DATABASE_test;
exports.pool = new pg_1.Pool({
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    database: NODE_ENV == 'dev' ? POSTGRES_DATABASE : POSTGRES_DATABASE_test,
    port: 5431,
    host: POSTGRES_HOST
});

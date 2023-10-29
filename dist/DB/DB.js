"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
const pg_1 = require("pg");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const { POSTGRES_USER, POSTGRES_PW, POSTGRES_DB, POSTGRES_HOST, POSTGRES_PORT, } = process.env;
exports.client = new pg_1.Pool({
    host: POSTGRES_HOST,
    database: POSTGRES_DB,
    user: POSTGRES_USER,
    password: POSTGRES_PW,
    port: Number(POSTGRES_PORT),
});

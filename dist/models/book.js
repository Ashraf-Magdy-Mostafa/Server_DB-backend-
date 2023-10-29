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
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookStore = void 0;
const DB_1 = require("../DB/DB");
//index all
class bookStore {
    index() {
        return __awaiter(this, void 0, void 0, function* () {
            //client connect
            const conn = yield DB_1.client.connect();
            //client query
            const sql = `SELECT * FROM books`;
            const result = yield conn.query(sql);
            conn.release();
            return result.rows;
        });
    }
    create(book) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield DB_1.client.connect();
            const sql = `INSERT INTO books(title,pages,author) VALUES($1,$2,$3) RETURNING *`;
            const result = yield conn.query(sql, [book.title, book.pages, book.author]);
            return result.rows[0];
        });
    }
}
exports.bookStore = bookStore;
exports.default = bookStore;

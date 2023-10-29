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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const book_1 = __importDefault(require("../models/book"));
const Store = new book_1.default();
const index = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Store.index();
    res.json(result);
});
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, author, pages } = req.body;
    const b = {
        title: title,
        pages: pages,
        author: author,
    };
    const result = yield Store.create(b);
    res.send(result);
});
let booksAction = (app) => {
    app.get("/books", index);
    app.post("/books", create);
};
exports.default = booksAction;

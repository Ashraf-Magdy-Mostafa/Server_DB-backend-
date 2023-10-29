"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const books_1 = __importDefault(require("../handlers/books"));
const port = 3000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.listen(port, () => {
    console.log("server running on LH:3000");
});
app.get("/", (req, res) => {
    res.json("welcome to main sites");
});
(0, books_1.default)(app);

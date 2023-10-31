import express from "express";
import booksAction from "../handlers/books";
import userHandler from "../handlers/users";
import bodyParser from "body-parser";
import ordersHandler from "../handlers/orders";
const port = 3000;
const app = express();
app.use(bodyParser.json());
app.listen(port, () => {
  console.log("server running on LH:3000");
});
app.get("/", (req, res) => {
  res.send("welcome to main sites");
});
booksAction(app);
userHandler(app);
ordersHandler(app);

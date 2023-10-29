import express, { Response, Request } from "express";
import bookStore from "../models/book";
const Store = new bookStore();

const index = async (_req: Request, res: Response) => {
  const result = await Store.index();
  res.json(result);
};
const create = async (req: Request, res: Response) => {
  const { title, author, pages } = req.body;
  const b = {
    title: title,
    pages: pages,
    author: author,
  };
  const result = await Store.create(b);
  res.send(result);
};
let booksAction = (app: express.Application) => {
  app.get("/books", index);
  app.post("/books", create);
};
export default booksAction;

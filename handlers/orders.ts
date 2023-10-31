import express, { Request, Response } from "express";
import ORDER, { order } from "../models/order";
//
const orders = new ORDER();

const getAll = async (req: Request, res: Response) => {
  try {
    const result = await orders.index();
    res.send(result);
  } catch (err) {
    res.send("error getting orders");
  }
};
const create = async (req: Request, res: Response) => {
  let ord: order = {
    user_id: Number(req.body.user_id),
    book_id: Number(req.body.book_id),
    quantity: Number(req.body.quantity),
  };
  const result = await orders.create(ord);
  res.json(result);
};

const ordersHandler = (app: express.Application) => {
  app.get("/orders", getAll);
  app.post("/orders", create);
};
export default ordersHandler;

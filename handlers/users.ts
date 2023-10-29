import express, { Request, Response } from "express";
import userModel, { User } from "../models/users";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
const user = new userModel();

const create = async (req: express.Request, res: Response) => {
  try {
    let newUser: User = {
      name: req.body.name,
      password: req.body.password,
    };

    console.log(req.body);
    const result = await user.create(newUser);

    let ver = jwt.sign(result, process.env.JWT_SECRET as string);
    res.json(ver);
  } catch (err) {
    console.log(err);
  }
};
const index = async (req: Request, res: Response) => {
  try {
    const result = await user.index();
    let auth = req.headers.authorization;
    const token = auth?.split(" ")[1];
    console.log(token);
    console.log(process.env.JWT_SECRET);
    let ver = jwt.verify(token as string, process.env.JWT_SECRET as string);
    res.send(result);
    console.log(ver);
    console.log("index route visisted");
  } catch (error) {
    console.log(`error reason: ${error}`);
  }
};
const log = async (req: Request, res: Response) => {
  try {
    let { name, password } = req.body;
    let u: User = { name: name, password: password };
    const result = await user.checkinfo(u);
    console.log(result);
    result
      ? res.status(200).json("sucss logged in ")
      : res.json("wrong password entered");
  } catch (err) {
    res.json("failed log in cuz error" + err);
  }
};

export const userHandler = (app: express.Application) => {
  app.get("/users", index);
  app.post("/users", create);
  app.post("/users/login", log);
};

export default userHandler;

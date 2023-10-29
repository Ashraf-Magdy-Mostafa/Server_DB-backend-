// user model name pw
import bcrypt from "bcrypt";
import { client } from "../DB/DB";
export type User = {
  name: string;
  password: string;
};

class userModel {
  async create(U: User): Promise<User> {
    const conn = await client.connect();
    const sql = `INSERT INTO users (name,password) VALUES ($1,$2) RETURNING *`;
    const hash_password = await bcrypt.hash(U.password, 10);
    const result = await conn.query(sql, [U.name, hash_password]);
    conn.release();
    return result.rows[0];
  }
  async index(): Promise<User[]> {
    const conn = await client.connect();
    const sql = `SELECT * FROM users`;
    const result = await conn.query(sql);
    conn.release();
    return result.rows;
  }
  async checkinfo(u: User) {
    const conn = await client.connect();
    const sql = `SELECT password FROM users WHERE name=$1`;
    const result = await conn.query(sql, [u.name]);
    console.log(result.rows[4]);
    let check = bcrypt.compare(u.password, result.rows[4].password);
    return check;
  }
}
export default userModel;
Array.isArray;

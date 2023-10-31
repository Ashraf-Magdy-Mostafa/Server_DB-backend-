import { client } from "../DB/DB";
export type order = {
  user_id: number;
  book_id: number;
  quantity: number;
};

class ORDER {
  async index() {
    const conn = await client.connect();
    const sql = `SELECT * FROM orders`;
    const result = await conn.query(sql);
    return result.rows;
  }
  async create(o: order) {
    const conn = await client.connect();
    const sql = `INSERT INTO orders (user_id,book_id,quantity) VALUES($1,$2,$3)`;
    const result = await conn.query(sql, [o.user_id, o.book_id, o.quantity]);
    return result.rows[0];
  }
}
export default ORDER;

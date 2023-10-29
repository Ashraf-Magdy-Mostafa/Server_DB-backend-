import { client } from "../DB/DB";

///class for each row in table
export type book = {
  title: string;
  pages: number;
  author: string;
};

//index all

export class bookStore {
  async index(): Promise<book[]> {
    //client connect
    const conn = await client.connect();
    //client query
    const sql = `SELECT * FROM books`;
    const result = await conn.query(sql);
    conn.release();
    return result.rows;
  }
  async create(book: book) {
    const conn = await client.connect();
    const sql = `INSERT INTO books(title,pages,author) VALUES($1,$2,$3) RETURNING *`;
    const result = await conn.query(sql, [book.title, book.pages, book.author]);
    return result.rows[0];
  }
}
export default bookStore;

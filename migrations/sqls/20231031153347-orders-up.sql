CREATE TABLE orders (id SERIAL PRIMARY KEY, user_id integer REFERENCES users(id),book_id integer REFERENCES books(id),quantity integer)
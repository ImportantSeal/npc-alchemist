import { Pool } from 'pg';
import { config } from '../config/env';

const pool = new Pool({
  user: config.DB_USER,
  host: config.DB_HOST,
  password: config.DB_PASSWORD,
  database: config.DB_NAME,
  port: config.DB_PORT,
});

export const getAllItems = async () => {
  const result = await pool.query('SELECT * FROM items');
  return result.rows;
};

export const getItemByIdService = async (id: number) => {
  const result = await pool.query('SELECT * FROM items WHERE id=$1', [id]);
  return result.rows[0] || null;
};

interface ItemData {
  name: string;
  price: number;
  description?: string;
  image?: string;
}

export const createItem = async (data: ItemData) => {
  const query = `
    INSERT INTO items (name, price, description, image)
    VALUES ($1, $2, $3, $4)
    RETURNING *;
  `;
  const values = [data.name, data.price, data.description || '', data.image || ''];
  const result = await pool.query(query, values);
  return result.rows[0];
};

export const updateExistingItem = async (id: number, data: ItemData) => {
  const query = `
    UPDATE items
    SET name = $1,
        price = $2,
        description = $3,
        image = $4
    WHERE id = $5
    RETURNING *;
  `;
  const values = [data.name, data.price, data.description || '', data.image || '', id];
  const result = await pool.query(query, values);
  return result.rows[0];
};

export const deleteExistingItem = async (id: number) => {
  const query = `
    DELETE FROM items
    WHERE id = $1
    RETURNING *;
  `;
  const result = await pool.query(query, [id]);
  return result.rows[0];
};
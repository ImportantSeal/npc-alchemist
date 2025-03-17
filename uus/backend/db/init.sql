CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE IF NOT EXISTS items (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL UNIQUE,
  price DECIMAL(6,2) NOT NULL,
  description TEXT,
  image TEXT,
  created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(100) NOT NULL,
  email VARCHAR(60) UNIQUE NOT NULL,
  hashed_password VARCHAR(255) NOT NULL,
  admin BOOLEAN DEFAULT FALSE,
  created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO items (name, price, description, image) VALUES
('Mac & Cheese', 8.99, 'Delicious mac and cheese', 'images/mac_and_cheese.png'),
('Margherita Pizza', 12.99, 'Classic pizza with tomato, mozzarella and basil', 'images/margherita_pizza.png');
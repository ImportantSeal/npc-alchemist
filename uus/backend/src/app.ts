import express, { Application } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path'; 
import userRoutes from './routes/users';
import itemRoutes from './routes/items';

dotenv.config();

const app: Application = express();

app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use('/images', express.static(path.join(__dirname, '../images')));

app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/items', itemRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

export default app;

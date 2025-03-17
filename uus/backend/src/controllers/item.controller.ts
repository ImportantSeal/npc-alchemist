import { Request, Response } from 'express';
import {
  getAllItems,
  createItem,
  updateExistingItem as updateExistingItemService,
  deleteExistingItem as deleteExistingItemService,
  getItemByIdService, 
} from '../services/item.service';

export const getItems = async (req: Request, res: Response) => {
  try {
    const items = await getAllItems();
    return res.status(200).json(items);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Could not fetch items' });
  }
};

export const getItemById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id) || id <= 0) {
      return res.status(400).json({ error: 'Invalid item ID' });
    }
    const item = await getItemByIdService(id);
    if (!item) {
      return res.status(404).json({ error: 'Item not found' });
    }
    return res.status(200).json(item);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Could not fetch item by id' });
  }
};

export const createNewItem = async (req: Request, res: Response) => {
  try {
    const { name, price, description, image } = req.body;
    // Perustason validointi
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return res.status(400).json({ error: 'Invalid or missing name' });
    }
    if (price == null || Number(price) <= 0) {
      return res.status(400).json({ error: 'Invalid or missing price' });
    }
    const newItem = await createItem({ name, price, description, image });
    return res.status(201).json(newItem);
  } catch (error: any) {
    if (error.code === '23505') {
      return res.status(400).json({ error: 'Duplicate item' });
    }
    console.error(error);
    return res.status(500).json({ error: 'Could not create item' });
  }
};

export const updateExistingItem = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id) || id <= 0) {
      return res.status(400).json({ error: 'Invalid item ID' });
    }
    const { name, price, description, image } = req.body;
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return res.status(400).json({ error: 'Invalid or missing name' });
    }
    if (price == null || Number(price) <= 0) {
      return res.status(400).json({ error: 'Invalid or missing price' });
    }
    const updatedItem = await updateExistingItemService(id, { name, price, description, image });
    if (!updatedItem) {
      return res.status(404).json({ error: 'Item not found' });
    }
    return res.status(200).json(updatedItem);
  } catch (error: any) {
    if (error.code === '23505') {
      return res.status(400).json({ error: 'Duplicate item' });
    }
    console.error(error);
    return res.status(500).json({ error: 'Could not update item' });
  }
};

export const deleteExistingItem = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id) || id <= 0) {
      return res.status(400).json({ error: 'Invalid item ID' });
    }
    const deletedItem = await deleteExistingItemService(id);
    if (!deletedItem) {
      return res.status(404).json({ error: 'Item not found' });
    }
    return res.status(200).json(deletedItem);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Could not delete item' });
  }
};
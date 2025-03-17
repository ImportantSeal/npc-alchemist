import { z } from 'zod';

export const itemSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long"),
  price: z.number().min(0, "Price must be a positive number"),
  description: z.string().optional(),
  image: z.string().optional(),
});

export const updateItemSchema = itemSchema.partial();

import { Router, Request, Response, NextFunction } from 'express';
import { verifyToken } from '../middleware/auth.middleware';
import {
  getItems,
  createNewItem,
  updateExistingItem,
  deleteExistingItem,
  getItemById,
} from '../controllers/item.controller';

const asyncHandler = (fn: any) => (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  return Promise.resolve(fn(req, res, next))
    .then(() => undefined) 
    .catch(next);
};

const router: Router = Router();

router.get('/:id', asyncHandler(getItemById));
router.get('/', asyncHandler(getItems));

router.post('/', verifyToken, asyncHandler(createNewItem));
router.put('/:id', verifyToken, asyncHandler(updateExistingItem));
router.delete('/:id', verifyToken, asyncHandler(deleteExistingItem));

export default router;
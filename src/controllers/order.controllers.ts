import { Request, Response } from 'express';
import orderService from '../services/order.service';

const findAll = async (_req: Request, res: Response): Promise<void> => {
  const orders = await orderService.findAll();
  res.status(200).json(orders);
};

const insertOrder = async (req: Request, res: Response): Promise<void> => {
  const { userId, productsIds } = req.body;
  const { statusCode, message } = await orderService.insertOrder(userId, productsIds);
  res.status(statusCode).json(message);
};

export default {
  findAll,
  insertOrder,
};
import { Request, Response } from 'express';
import orderService from '../services/order.service';

const findAll = async (_req: Request, res: Response): Promise<void> => {
  const orders = await orderService.findAll();
  res.status(200).json(orders);
};

export default {
  findAll,
};
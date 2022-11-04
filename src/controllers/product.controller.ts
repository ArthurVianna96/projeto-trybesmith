import { Request, Response } from 'express';
import productService from '../services/product.service';

const insertProduct = async (req: Request, res: Response): Promise<Response> => {
  const { name, amount } = req.body;
  const { statusCode, message } = await productService.insertProduct(name, amount);
  if (statusCode !== 201) {
    return res.status(statusCode).json({ message });
  }
  return res.status(statusCode).json(message);
};

const findAll = async (_req: Request, res: Response): Promise<void> => {
  const products = await productService.findAll();
  res.status(200).json(products);
};

export default {
  insertProduct,
  findAll,
};
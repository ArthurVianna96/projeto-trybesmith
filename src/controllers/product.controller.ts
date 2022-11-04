import { Request, Response } from 'express';
import productService from '../services/product.service';

const insertProduct = async (req: Request, res: Response): Promise<void> => {
  const { name, amount } = req.body;
  const { message } = await productService.insertProduct(name, amount);

  res.status(201).json(message);
};

const findAll = async (_req: Request, res: Response): Promise<void> => {
  const products = await productService.findAll();
  res.status(200).json(products);
};

export default {
  insertProduct,
  findAll,
};
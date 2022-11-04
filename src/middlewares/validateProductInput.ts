import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from '../interfaces/interfaces';

export const validateProductName = async (
  req: Request, 
  res: Response, 
  next: NextFunction,
): Promise<void | Response> => {
  const { name } = req.body;
  if (!name) {
    return res.status(StatusCodes.BadRequest).json({ message: '"name" is required' });
  }
  if (typeof name !== 'string') {
    return res.status(StatusCodes.Unprocessable).json({ message: '"name" must be a string' });
  }
  if (name.length < 3) {
    return res.status(StatusCodes.Unprocessable).json(
      { message: '"name" length must be at least 3 characters long' },
    );
  }

  next();
};

export const validateProductAmount = async (
  req: Request, 
  res: Response, 
  next: NextFunction,
): Promise<void | Response> => {
  const { amount } = req.body;
  if (!amount) {
    return res.status(StatusCodes.BadRequest).json({ message: '"amount" is required' });
  }
  if (typeof amount !== 'string') {
    return res.status(StatusCodes.Unprocessable).json({ message: '"amount" must be a string' });
  }
  if (amount.length < 3) {
    return res.status(StatusCodes.Unprocessable).json(
      { message: '"amount" length must be at least 3 characters long' },
    );
  }

  next();
};

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

export const validateUsename = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void | Response> => {
  const { username } = req.body;
  if (!username) {
    return res.status(StatusCodes.BadRequest).json({ message: '"username" is required' });
  }
  if (typeof username !== 'string') {
    return res.status(StatusCodes.Unprocessable).json({ message: '"username" must be a string' });
  }
  if (username.length < 3) {
    return res.status(StatusCodes.Unprocessable).json(
      { message: '"username" length must be at least 3 characters long' },
    );
  }

  next();
};

export const validateClasse = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void | Response> => {
  const { classe } = req.body;
  if (!classe) {
    return res.status(StatusCodes.BadRequest).json({ message: '"classe" is required' });
  }
  if (typeof classe !== 'string') {
    return res.status(StatusCodes.Unprocessable).json({ message: '"classe" must be a string' });
  }
  if (classe.length < 3) {
    return res.status(StatusCodes.Unprocessable).json(
      { message: '"classe" length must be at least 3 characters long' },
    );
  }

  next();
};

export const validateLevel = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void | Response> => {
  const { level } = req.body;
  if (level === null || level === undefined) {
    return res.status(StatusCodes.BadRequest).json({ message: '"level" is required' });
  }
  if (typeof level !== 'number') {
    return res.status(StatusCodes.Unprocessable).json({ message: '"level" must be a number' });
  }
  if (level < 1) {
    return res.status(StatusCodes.Unprocessable).json(
      { message: '"level" must be greater than or equal to 1' },
    );
  }

  next();
};

export const validatePassword = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void | Response> => {
  const { password } = req.body;
  if (!password) {
    return res.status(StatusCodes.BadRequest).json({ message: '"password" is required' });
  }
  if (typeof password !== 'string') {
    return res.status(StatusCodes.Unprocessable).json({ message: '"password" must be a string' });
  }
  if (password.length < 8) {
    return res.status(StatusCodes.Unprocessable).json(
      { message: '"password" length must be at least 8 characters long' },
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

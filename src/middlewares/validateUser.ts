import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { StatusCodes } from '../interfaces/interfaces';

const secret = process.env.JWT_SECRET;

interface Idecoded {
  data: {
    userId: number
  }
}

const validateUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void | Response> => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(StatusCodes.Unauthorized).json({ message: 'Token not found' });
  }
  try {
    const decoded = jwt.verify(token as string, secret as string) as Idecoded;
    req.body.userId = decoded.data.userId;
    next();
  } catch (error) {
    console.log(error);
    return res.status(StatusCodes.Unauthorized).json({ message: 'Invalid token' });
  }
};

export default validateUser;
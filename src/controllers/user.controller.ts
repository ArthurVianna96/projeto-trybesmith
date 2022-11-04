import { Request, Response } from 'express';
import userService from '../services/user.service';

const insertUser = async (req: Request, res: Response): Promise<void> => {
  const token = await userService.insertUser(req.body);
  res.status(201).json(token);
};

export default {
  insertUser,
};
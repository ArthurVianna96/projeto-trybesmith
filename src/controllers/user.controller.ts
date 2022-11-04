import { Request, Response } from 'express';
import { StatusCodes } from '../interfaces/interfaces';
import userService from '../services/user.service';

const insertUser = async (req: Request, res: Response): Promise<void> => {
  const token = await userService.insertUser(req.body);
  res.status(201).json(token);
};

const validateInputs = (request: string): boolean => {
  if (request) {
    return true;
  }
  return false;
};

const login = async (req: Request, res: Response): Promise<Response> => {
  const { username, password } = req.body;
  if (!validateInputs(username)) {
    return res.status(StatusCodes.BadRequest).json({ message: '"username" is required' });
  }
  if (!validateInputs(password)) {
    return res.status(StatusCodes.BadRequest).json({ message: '"password" is required' });
  }
  const { statusCode, message } = await userService.login(username, password);
  if (statusCode !== 200) {
    return res.status(statusCode).json({ message });
  }
  return res.status(statusCode).json(message);
};

export default {
  insertUser,
  login,
};

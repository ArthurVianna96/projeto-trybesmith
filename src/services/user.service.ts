import jwt from 'jsonwebtoken';
import { IToken, IUserInsert } from '../interfaces/interfaces';
import userModel from '../models/user.model';

const secret = process.env.JWT_SECRET;

const insertUser = async (userInfo: IUserInsert): Promise<IToken> => {
  const userId = await userModel.insert(userInfo);
  const token = jwt.sign({ data: { userId } }, secret as string);
  return { token };
};

export default {
  insertUser,
};

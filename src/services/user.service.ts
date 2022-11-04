import jwt from 'jsonwebtoken';
import { IResponse, IToken, IUser, StatusCodes } from '../interfaces/interfaces';
import userModel from '../models/user.model';

const secret = process.env.JWT_SECRET;

interface ILoginResponse extends IResponse {
  message: IToken | string
}

const insertUser = async (userInfo: IUser): Promise<IToken> => {
  const userId = await userModel.insert(userInfo);
  const token = jwt.sign({ data: { userId } }, secret as string);
  return { token };
};

const login = async (username: string, password: string): Promise<ILoginResponse> => {
  const user = await userModel.findOne(username, password);
  if (!user) {
    return { statusCode: StatusCodes.Unauthorized, message: 'Username or password invalid' };
  }
  const token = jwt.sign({ data: { userId: user.id } }, secret as string);
  return { statusCode: StatusCodes.Success, message: { token } };
};

export default {
  insertUser,
  login,
};

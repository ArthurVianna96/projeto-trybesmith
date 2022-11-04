import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { IUser } from '../interfaces/interfaces';
import connection from './connection';

const findOne = async (username: string, password: string): Promise<IUser> => {
  const [[user]] = await connection.execute<(
  IUser & RowDataPacket)[]>(
    'SELECT id FROM Trybesmith.Users WHERE username = ? AND password = ?',
    [username, password],
    );
  return user;
};

const insert = async (userInfo: IUser): Promise<number> => {
  const { username, classe, level, password } = userInfo;
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?,?,?,?)',
    [username, classe, level, password],
  );
  return insertId;
};

export default {
  insert,
  findOne,
};
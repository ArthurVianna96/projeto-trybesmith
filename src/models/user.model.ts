import { ResultSetHeader } from 'mysql2';
import { IUserInsert } from '../interfaces/interfaces';
import connection from './connection';

const insert = async (userInfo: IUserInsert): Promise<number> => {
  const { username, classe, level, password } = userInfo;
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?,?,?,?)',
    [username, classe, level, password],
  );
  return insertId;
};

export default {
  insert,
};
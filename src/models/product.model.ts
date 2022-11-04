import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from './connection';
import { IProduct } from '../interfaces';

const insert = async (name: string, amount: string): Promise<IProduct> => {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
    [name, amount],
  );

  return {
    id: insertId,
    name,
    amount,
  };
};

const findAll = async (): Promise<IProduct[]> => {
  const [results] = await connection.execute<(IProduct & RowDataPacket)[]>(
    'SELECT * FROM Trybesmith.Products');

  return results;
};

export default {
  insert,
  findAll,
};

import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { IOrder } from '../interfaces/interfaces';
import connection from './connection';

const findAll = async (): Promise<IOrder[]> => {
  const [orders] = await connection.execute<(IOrder & RowDataPacket)[]>(
    `SELECT o.id, o.userId, json_arrayagg(p.id) AS productsIds FROM Trybesmith.Orders AS o
    INNER JOIN Trybesmith.Products as p
      ON o.id = p.orderId
    GROUP BY o.id`);
  return orders;
};

const findByOrderId = async (orderId: number): Promise<IOrder> => {
  const [[result]] = await connection.execute<(
  IOrder & RowDataPacket)[]>(
    `SELECT o.userId, json_arrayagg(p.id) AS productsIds FROM Trybesmith.Orders AS o
    INNER JOIN Trybesmith.Products as p
      ON o.id = p.orderId
    WHERE o.id = ?
    GROUP BY o.id`,
    [orderId],
    );
  return result;
};

const insert = async (userId: number, productsIds: number[]): Promise<IOrder> => {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Orders (userId) VALUES (?)',
    [userId],
  );
  await Promise.all<void>(productsIds.map(async (productId: number): Promise<void> => {
    await connection.execute<ResultSetHeader>(
      'UPDATE Trybesmith.Products SET orderId = ? WHERE id = ?',
      [insertId, productId],
    );
  }));
  return findByOrderId(insertId);
};

export default {
  findAll,
  insert,
};
import { RowDataPacket } from 'mysql2';
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

export default {
  findAll,
};
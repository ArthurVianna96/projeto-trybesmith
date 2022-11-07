import { IOrder, IResponse } from '../interfaces/interfaces';
import orderModel from '../models/order.model';

interface IUserOrdersResponse extends IResponse {
  message: IOrder
}

const findAll = async (): Promise<IOrder[]> => orderModel.findAll();

const insertOrder = async (userId: number, productsIds: number[]): Promise<IUserOrdersResponse> => {
  const userOrders = await orderModel.insert(userId, productsIds);
  return { statusCode: 201, message: userOrders };
};

export default {
  findAll,
  insertOrder,
};
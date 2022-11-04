import { IOrder } from '../interfaces/interfaces';
import orderModel from '../models/order.model';

const findAll = async (): Promise<IOrder[]> => orderModel.findAll();

export default {
  findAll,
};
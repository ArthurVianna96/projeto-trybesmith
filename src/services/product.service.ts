import { IProduct } from '../interfaces';
import productModel from '../models/product.model';

interface IResponse {
  type: string | null,
  message: IProduct
}

const insertProduct = async (name: string, amount: string): Promise<IResponse> => {
  const product = await productModel.insert(name, amount);
  return { type: null, message: product };
};

const findAll = async (): Promise<IProduct[]> => productModel.findAll(); 

export default {
  insertProduct,
  findAll,
};
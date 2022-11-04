import { IProduct, IResponse, StatusCodes } from '../interfaces/interfaces';
import productModel from '../models/product.model';

interface IProductInsertResponse extends IResponse {
  message: IProduct
}

const insertProduct = async (name: string, amount: string): Promise<IProductInsertResponse> => {
  const product = await productModel.insert(name, amount);
  return { statusCode: StatusCodes.Created, message: product };
};

const findAll = async (): Promise<IProduct[]> => productModel.findAll(); 

export default {
  insertProduct,
  findAll,
};
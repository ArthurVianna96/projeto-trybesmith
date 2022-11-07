import { Router } from 'express';
import productController from '../controllers/product.controller';
import { validateProductName, validateProductAmount } from '../middlewares/validateInputs';

const products = Router();

products.post('/', validateProductName, validateProductAmount, productController.insertProduct);
products.get('/', productController.findAll);

export default products;

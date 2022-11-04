import { Router } from 'express';
import productController from '../controllers/product.controller';

const products = Router();

products.post('/', productController.insertProduct);
products.get('/', productController.findAll);

export default products;

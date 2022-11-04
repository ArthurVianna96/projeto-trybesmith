import { Router } from 'express';
import orderControllers from '../controllers/order.controllers';

const orders = Router();

orders.get('/', orderControllers.findAll);

export default orders;
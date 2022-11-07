import { Router } from 'express';
import orderControllers from '../controllers/order.controllers';
import { validateIds } from '../middlewares/validateInputs';
import validateUser from '../middlewares/validateUser';

const orders = Router();

orders.get('/', orderControllers.findAll);
orders.post('/', validateUser, validateIds, orderControllers.insertOrder);

export default orders;
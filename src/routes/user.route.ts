import { Router } from 'express';
import userController from '../controllers/user.controller';
import { 
  validateClasse,
  validateLevel,
  validatePassword,
  validateUsename,
} from '../middlewares/validateInputs';

const users = Router();

users.post(
  '/users', 
  validateUsename,
  validateClasse,
  validateLevel,
  validatePassword,
  userController.insertUser,
);
users.post('/login', userController.login);

export default users;

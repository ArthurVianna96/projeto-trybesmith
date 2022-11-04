import { Router } from 'express';
import userController from '../controllers/user.controller';

const users = Router();

users.post('/users', userController.insertUser);
users.post('/login', userController.login);

export default users;

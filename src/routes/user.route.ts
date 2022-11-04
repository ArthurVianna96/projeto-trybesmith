import { Router } from 'express';
import userController from '../controllers/user.controller';

const users = Router();

users.post('/', userController.insertUser);

export default users;

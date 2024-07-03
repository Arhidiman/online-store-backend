import { Router } from 'express';  // Импортируем Router из express
import UsersController from "../controllers/UsersController";

const usersRouter: Router = Router();  // Создаем экземпляр Router

usersRouter.post('/user/sign-up', UsersController.create);
usersRouter.post('/user/sign-in', UsersController.auth);
usersRouter.get('/user/get', UsersController.getUser);


export default usersRouter;

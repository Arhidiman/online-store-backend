import { Router } from 'express';  // Импортируем Router из express
import UsersController from "../controllers/UsersController";

const usersRouter: Router = Router();  // Создаем экземпляр Router

usersRouter.post('/users', UsersController.create);
// usersRouter.get('/users', UsersController.getAll);
// usersRouter.get('/users/:id', UsersController.getOne);
// usersRouter.put('/users', UsersController.update);
// usersRouter.delete('/users/:id', UsersController.delete);
// usersRouter.post('/users/sign-in', UsersController.signIn);

export default usersRouter;

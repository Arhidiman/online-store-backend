import { Router } from 'express';  // Импортируем Router из express
import { categoriesController } from '../controllers/CategoriesController';

export const categoriesRouter: Router = Router();  // Создаем экземпляр Router

categoriesRouter.get('/categories/get', categoriesController.getAll);
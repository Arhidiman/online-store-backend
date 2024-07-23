import { Router } from 'express';  // Импортируем Router из express
import ProductsController from "../controllers/ProductsController";



const productsRouter: Router = Router();  // Создаем экземпляр Router

// productsRouter.post('/goods', ProductsController.create)
productsRouter.get('/goods', ProductsController.getAll)
// goodsRouter.get('/goods/:id', GoodsController.getOne)
// goodsRouter.put('/goods', GoodsController.update)
// goodsRouter.delete('/goods/:id', GoodsController.delete)

export default productsRouter


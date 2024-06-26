import { Router } from 'express';  // Импортируем Router из express
import GoodsController from "../controllers/GoodsController";



const goodsRouter: Router = Router();  // Создаем экземпляр Router

goodsRouter.post('/goods', GoodsController.create)
// goodsRouter.get('/goods', GoodsController.getAll)
// goodsRouter.get('/goods/:id', GoodsController.getOne)
// goodsRouter.put('/goods', GoodsController.update)
// goodsRouter.delete('/goods/:id', GoodsController.delete)

export default goodsRouter


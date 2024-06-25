import Router from 'express'
import GoodsController from "../controllers/GoodsController.js";



const goodsRouter = new Router

goodsRouter.post('/goods', GoodsController.create)
// goodsRouter.get('/goods', GoodsController.getAll)
// goodsRouter.get('/goods/:id', GoodsController.getOne)
// goodsRouter.put('/goods', GoodsController.update)
// goodsRouter.delete('/goods/:id', GoodsController.delete)

export default goodsRouter
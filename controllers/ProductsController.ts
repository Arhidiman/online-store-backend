import {Request, Response} from 'express';
import {productsModel} from "../models/productsModel/productsModel.ts";


class ProductsController {
    async getAll(req: Request, res: Response) {
        try {
            const filterParameters = req.body
            const productsData = await productsModel.getByFilters(filterParameters)
            res.status(200).json(productsData)
        } catch (err: any) {
            res.status(500).json(err.message)
        }
    }

    async getOne(req: Request, res: Response) {
        console.log('get one good')
    }

    async update(req: Request, res: Response) {
        console.log('update good')
    }

    async delete(req: Request, res: Response) {
        console.log('delete good')
    }
}

export default new ProductsController
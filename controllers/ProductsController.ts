import {Request, Response} from 'express';
import {productsModel} from "../models/productsModel.ts";


class ProductsController {
    async getAll(req: Request, res: Response) {
        try {

            const filterParameters = req.body
            const productsData = await productsModel.getAll(filterParameters)
            // console.log(req.body, 'req data')
            // console.log(productsData, 'roducts data')
            res.status(200).json(productsData)

        } catch (err: any) {
            console.log(err.message)
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
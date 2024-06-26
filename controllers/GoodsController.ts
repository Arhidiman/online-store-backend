import {Request, Response} from 'express';
import {goodsModel} from "../models/GoodsModel.ts";


class GoodsController {
    async create(req: Request, res: Response) {
       try {
           console.log(req.body)
       } catch (err) {
           console.log(err)
       }
    }

    async getAll(req: Request, res: Response) {
        console.log('get all goods')
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

export default new GoodsController
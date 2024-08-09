import {Request, Response} from 'express'
import { categoriesModel } from '../models/categoriesModel/categoriesModel'

class CategoriesController {
    async getAll (req: Request, res: Response) {
        try {
            const categories = await categoriesModel.categories()
            res.status(201).json(categories)
        } catch (err: any) {
            res.json(err.message)
        }
       
    }
}

export const categoriesController = new CategoriesController()
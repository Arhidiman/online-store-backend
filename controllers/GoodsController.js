import {goodsModel} from "../models/GoodsModel.js";


class GoodsController {
    async create(req, res) {
       try {
           console.log(req.body)
       } catch (err) {
           console.log(err)
       }
    }

    async getAll(req, res) {
        console.log('get all goods')
    }

    async getOne(req, res) {
        console.log('get one good')
    }

    async update(req, res) {
        console.log('update good')
    }

    async delete(req, res) {
        console.log('delete good')
    }
}

export default new GoodsController
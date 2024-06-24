import GoodsModel from './models/GoodsModel';

class GoodsController {
    async create(req, res) {
        console.log('create good')
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

export default GoodsController
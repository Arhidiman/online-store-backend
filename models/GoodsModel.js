import {pool} from "../db.js";

class GoodsModel {
    async createGood () {
        console.log('creating good')
    }
}

export const goodsModel = new GoodsModel()
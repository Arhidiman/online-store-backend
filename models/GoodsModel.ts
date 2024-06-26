import {pool} from "../db";

class GoodsModel {
    async createGood () {
        console.log('creating good')
    }
}

export const goodsModel = new GoodsModel()
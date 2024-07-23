import {pool} from "../db";



class ProductsModel {
    async getAll () {

        const query= () => `
            select * from products
        `
        try {
            
            const dbResponse = await pool.query(query())

            console.log(dbResponse)

            return dbResponse.rows

        } catch (err: any) {
            console.log(err.message)
        }
    }
}

export const productsModel = new ProductsModel()
import {pool} from "../../db";
import { getFiltersCondition } from "./helpers";

type CheckboxValueType = string | number | boolean

interface IFiltersParameters {
    filters: {
        priceMax: number,
        options: CheckboxValueType[]
    },
    sorters: {options: CheckboxValueType[]}
}

class ProductsModel {
    async getByFilters (filterParameters: IFiltersParameters) {


        console.log(filterParameters)
        const totalCondition = getFiltersCondition(filterParameters)

        const query= () => `
            select * from products where ${totalCondition}
        `

        console.log(query(), 'quety')
        try {            
            const dbResponse = await pool.query(query())
            return dbResponse.rows
        } catch (err: any) {
            console.log(err.message, 'DB error')
            throw new Error(err.message)
        }
    }
}

export const productsModel = new ProductsModel()
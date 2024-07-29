import {pool} from "../db";

type CheckboxValueType = string | number | boolean
interface IFiltersParameters {
    filters: {
        priceMax: number,
        options: CheckboxValueType[]
    },
    sorters: {options: CheckboxValueType[]}
}

class ProductsModel {
    async getAll (filterParameters: IFiltersParameters) {


        const generateStringCondition = (arr: (string | number | boolean)[], arrValCondition: string, join: string) => {
            return arr.map((option) => `${option} ${arrValCondition}`).join(join)
        }

        const getFiltersCondition = (filtersData: IFiltersParameters) => {
        
            const {priceMax, options: filtersOptions} = filtersData.filters
            const {options: sortersOptions} = filtersData.sorters

            if (!priceMax && filtersOptions.length === 0) return undefined

            const priceCondition = priceMax && `price < ${priceMax}`
            const filtersCondition = generateStringCondition(filtersOptions, 'is not null', ' and ')

            const filter = `
                ${priceCondition ? priceCondition : ''}
                ${filtersCondition.length > 0 ? ' and '+ filtersCondition : ''}
            
            `
            return {filter}
        }

        const conditions = getFiltersCondition(filterParameters)

        const query= () => `
            select * from products where ${conditions?.filter}
        `
        try {            
            const dbResponse = await pool.query(query())
            return dbResponse.rows
        } catch (err: any) {
            console.log(err.message)
        }
    }
}

export const productsModel = new ProductsModel()
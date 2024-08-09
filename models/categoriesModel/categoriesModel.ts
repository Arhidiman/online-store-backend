import axios from "axios";
import { pool } from "../../db";

class CategoriesModel {
    async categories() {
        const categoriesQuery = `SELECT CATEGORY_ID, NAME FROM CATEGORIES`
        try {
            const dbRequest = await pool.query(categoriesQuery)

            console.log(dbRequest.rows, 'C A T E GO RI ES')
            return dbRequest.rows
        } catch (err: any) {
            throw new Error(err.message)
        }
    }
}


export const categoriesModel = new CategoriesModel()
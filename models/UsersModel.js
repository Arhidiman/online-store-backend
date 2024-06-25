import {pool} from "../db.js";


class UsersModel {
    async createUser (name, password) {
        console.log('create user')
        await pool.query(`insert into store_users (username, password) values ('${name}', '${password}')`);

    }
}

export const usersModel = new UsersModel()
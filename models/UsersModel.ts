import {pool} from "../db";


class UsersModel {
    async createUser (name: string, password: string) {
        console.log('create user')
        await pool.query(`insert into store_users (username, password) values ('${name}', '${password}')`);

    }
}

export const usersModel = new UsersModel()
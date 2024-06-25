import {usersModel} from "../models/UsersModel.js";

class UsersController {
    async create(req, res) {
        try {
            console.log(req.body)
            const {username, password} = req.body;
            await usersModel.createUser(username, password)
            res.status(201).send('success')
        } catch (err) {
            console.log(`Ошибка при создании пользователя ${err}`)
        }
    }

    async getAll(req, res) {
        console.log('get all user')
    }

    async getOne(req, res) {
        console.log('get one user')
    }

    async update(req, res) {
        console.log('update user')
    }

    async delete(req, res) {
        console.log('delete user')
    }
}

export default new UsersController
import { Request, Response } from 'express';
import {usersModel} from "../models/UsersModel.ts";

class UsersController {
    async create(req: Request, res: Response) {
        try {
            console.log(req.body)
            const {username, password} = req.body;
            await usersModel.createUser(username, password)
            res.status(201).send('success')
        } catch (err) {
            console.log(`Ошибка при создании пользователя ${err}`)
        }
    }

    // async getAll(req: Request, res) {
    //     console.log('get all user')
    // }
    //
    // async getOne(req: Request, res) {
    //     console.log('get one user')
    // }
    //
    // async update(req: Request, res) {
    //     console.log('update user')
    // }
    //
    // async delete(req: Request, res) {
    //     console.log('delete user')
    // }
}

export default new UsersController
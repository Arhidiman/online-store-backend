import { Request, Response } from 'express';
import {usersModel} from "../models/UsersModel.ts";
import axios, {AxiosResponse} from "axios";

const AUTH_PORT = 6000;
const BASE_URL = 'http://localhost'


class UsersController {
    async create(req: Request, res: Response) {
        try {
            const data = req.body
            console.log(data, 'request from client')

            const authUrl = `${BASE_URL}:${AUTH_PORT}/user/auth`
            console.log(authUrl, 'auth url')

            const authRes: AxiosResponse = await axios.post(authUrl, data)
            const authData = authRes.data
            console.log(authData, 'response from auth service')
            res.status(201).send('response from auth server completed successfully')
        } catch (err: any) {
            console.log(err.message)
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
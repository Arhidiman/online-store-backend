import { Request, Response } from 'express';
import axios, {AxiosResponse} from "axios";

const AUTH_PORT = 6000;
const BASE_URL = 'http://localhost'
const userApiURL = `${BASE_URL}:${AUTH_PORT}/api/user`
const adminUserName = 'admin'

const userAPI = {
    USER_SIGN_UP: userApiURL+'/sign-up',
    USER_SIGN_IN: userApiURL+'/sign-in',
}





class UsersController {
    async create(req: Request, res: Response) {
        try {
            const data = req.body
            console.log(data, 'request from client')
            const authRes: AxiosResponse = await axios.post(userAPI.USER_SIGN_UP, data)
            const authData = authRes.data
            console.log(authData, 'response from auth service')
            res.status(201).send('response from auth server completed successfully')
        } catch (err: any) {
            const errMessage = `Ошибка создания пользователя. URL: ${userAPI.USER_SIGN_UP}, method: POST ${err.message}`
            res.status(402).send(errMessage)
            console.log(errMessage)
        }
    }

    async auth(req: Request, res: Response) {
        try {
            const data = req.body
            console.log(data, 'request from client')
            const authRes: AxiosResponse = await axios.post(userAPI.USER_SIGN_IN, data)
            const authData = authRes.data

            console.log(authRes.status, 'auth data')
            console.log(authData, 'response from auth service')
            res.status(201).send(authData)
        } catch (err: any) {
            console.log(err.response.data)
            const errMessage = `Ошибка аутентификации пользователя. URL: ${userAPI.USER_SIGN_IN}, method: GET ${err.message}`
            res.status(err.response.status).send(err.response.data)
        }
    }

    async getUser(req: Request, res: Response) {
        try {
            const data = req.body
            console.log(data, 'request from client')
            const authRes: AxiosResponse = await axios.post(userAPI.USER_SIGN_IN, data)
            const authData = authRes.data
            console.log(authData, 'response from auth service')
            res.status(201).send('response from auth server completed successfully')
        } catch (err: any) {
            const errMessage = `Ошибка аутентификации пользователя. URL: ${userAPI.USER_SIGN_IN}, method: POST ${err.message}`

            res.status(402).send(errMessage)
            console.log(errMessage)
        }
    }
}

export default new UsersController
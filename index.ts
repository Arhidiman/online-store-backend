const express = require('express')
import {Request, Response} from "express";
import axios, {AxiosResponse} from 'axios'
const request = require('request')

// import request from 'request'
const cors = require('cors')
import goodsRouter from "./router/goodsRouter";
import usersRouter from './router/usersRouter';
//
const app = express();
const MAIN_PORT = 5000;
const AUTH_PORT = 6000;
// //
app.use(express.json());
app.use(cors());
app.use('/api', goodsRouter);
app.use('/api', usersRouter);

const BASE_URL = 'http://localhost'


app.post('/reg', async (req: Request, res: Response) => {
    try {
        const data = req.body
        console.log(data, 'request from client')
        console.log(`${BASE_URL}:${AUTH_PORT}/reg`)
        
        const authRes: AxiosResponse = await axios.post(`${BASE_URL}:${AUTH_PORT}/reg`, data)
        const authData = authRes.data
        console.log(authData, 'response from auth service')
        res.status(201).send('response from auth server completed successfully')
    } catch (err: any) {
        console.log(err.message)
    }
})

const startApp = async () => {
    try {
        app.listen(MAIN_PORT, () => console.log('Server is listening on port ' + MAIN_PORT));
    } catch (e) {
        console.log('SERVER ERROR', e);
    }
};

startApp()

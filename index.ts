const express = require('express')
import {Request, Response} from "express";
import axios, {AxiosResponse} from 'axios'

const cors = require('cors')
import goodsRouter from "./router/goodsRouter";
import usersRouter from './router/usersRouter';


const app = express();
const MAIN_PORT = 5000;
const AUTH_PORT = 6000;


app.use(express.json());
app.use(cors());
app.use('/api', goodsRouter);
app.use('/api', usersRouter);

const BASE_URL = 'http://localhost'


const startApp = async () => {
    try {
        app.listen(MAIN_PORT, () => console.log('Server is listening on port ' + MAIN_PORT));
    } catch (e) {
        console.log('SERVER ERROR', e);
    }
};

startApp()

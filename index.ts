const express = require('express')
const cors = require('cors')

import productsRouter from "./router/productsRouter";
import usersRouter from './router/usersRouter';
import { categoriesRouter } from "./router/categoriesRouter";


const app = express();
const MAIN_PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use('/api', productsRouter);
app.use('/api', usersRouter);
app.use('/api', categoriesRouter);


const startApp = async () => {
    try {
        app.listen(MAIN_PORT, () => console.log('Server is listening on port ' + MAIN_PORT));
    } catch (e) {
        console.log('SERVER ERROR', e);
    }
};

startApp()

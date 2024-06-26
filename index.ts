const express = require('express')
const cors =require('cors')
import goodsRouter from "./router/goodsRouter";
import usersRouter from './router/usersRouter';
//
const app = express();
const PORT = 5000;
// //
app.use(express.json());
app.use(cors());
// app.use('/api', goodsRouter);
app.use('/api', usersRouter);

const startApp = async () => {
    try {
        app.listen(PORT, () => console.log('Server is listening on port ' + PORT));
    } catch (e) {
        console.log('SERVER ERROR', e);
    }
};

startApp();
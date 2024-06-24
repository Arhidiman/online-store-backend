import express from 'express';
import pkg from 'pg';
const { Pool } = pkg;
import cors from 'cors';
import config from './config.js';
// import goodsRouter from "./router/goodsRouter.js";
// import usersRouter from "./router/usersRouter.js';

const app = express();

app.use(express.json());
app.use(cors());
// app.use('/api', goodsRouter);
// app.use('/api', usersRouter);

const { db, server } = config;
const PORT = server.port;

const pool = new Pool({
    user: db.user,
    host: db.host,
    database: db.database,
    password: db.password,
    port: db.port,
});

const getUsers = async (req, res) => {
    try {
        const result = await pool.query('SELECT current_user');
        console.log(result.rows, 'DB result');
        res.json(result.rows);
    } catch (err) {
        console.error('DATABASE ERROR', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

app.get('/', getUsers);

const startApp = async () => {
    try {
        app.listen(PORT, () => console.log('Server is listening on port ' + PORT));
    } catch (e) {
        console.log('SERVER ERROR', e);
    }
};

startApp();

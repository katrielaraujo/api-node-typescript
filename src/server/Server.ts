import express, { Request, Response } from 'express';

const server = express();

server.get('/', (_: Request, res: Response) => {
    res.send('Olá, DEV!');
});

export { server };

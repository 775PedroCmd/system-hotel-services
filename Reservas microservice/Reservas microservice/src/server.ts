
import axios from 'axios';
import cors from 'cors';
import express, { NextFunction, Request, Response, Router } from 'express';
import { Quartos, Reservas } from './models/reservas';

const app = express();

app.use((req: Request, res: Response, next: NextFunction) => {
    next();
}, cors({
    maxAge: 84600
}));

app.use(express.json());

const route = Router();

const reservasRouter = Router();

route.get('/', (req: Request, res: Response) => {
    res.json({ message: 'hello world with Typescript' })
});

reservasRouter.get('/reservas', async (req: Request, res: Response) => {
    try {
        let quartos: Reservas[];
        const response = (await axios.get('http://localhost:3000/hoteis'));
        quartos = response.data.map((x: Reservas) => {
            return {
                nome: x.nome,
                quartos: x.quartos
            }
        });
        res.json(quartos);
    } catch (e) {
        res.status(500).json({ message: 'Error accessing the database', error: "teste" });
    }
});

reservasRouter.get('/reservas/:id/:numquarto', async (req: Request, res: Response) => {

    try {
        const response = await axios.get(`http://localhost:3000/hoteis/${req.params.id}`);

        let hotel: Reservas;
        let quartos: Quartos[];
        hotel = response.data;
        quartos = hotel.quartos.filter(x => x.numero == +req.params.numquarto);

        res.json(quartos);
    } catch (e) {
        res.status(500).json({ message: 'Error accessing the database', error: "teste" });
    }
});

reservasRouter.post('/reservas', async (req: Request, res: Response) => {
    try {
        const response = await axios.post(`http://localhost:3333/hoteis`, req.body);
        res.json(response.data);
    } catch (e) {
        res.status(500).json({ message: 'Error accessing the database', error: "teste" });
    }
});

reservasRouter.put('/reservas/:id', async (req: Request, res: Response) => {
    try {
        const response = await axios.post(`http://localhost:3000/hoteis/${req.params.id}`, req.body);
        res.json(response.data);
    } catch (e) {
        res.status(500).json({ message: 'Error accessing the database', error: "teste" });
    }
});

app.use(route, reservasRouter);

app.listen(3332, () => 'server running on port 3332');



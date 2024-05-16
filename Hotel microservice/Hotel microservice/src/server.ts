
import axios from 'axios';
import cors from 'cors';
import express, { NextFunction, Request, Response, Router } from 'express';
import { Quartos } from './models/reservas';

const app = express();

app.use((req: Request, res: Response, next: NextFunction) => {
    next();
}, cors({
    maxAge: 84600
}));

app.use(express.json());

const route = Router();

const hoteisRouter = Router();



route.get('/', (req: Request, res: Response) => {
    res.json({ message: 'hello world with Typescript' })
});

hoteisRouter.get('/hoteis', async (req: Request, res: Response) => {
    try {
        const response = await axios.get('http://localhost:3000/hoteis');
        res.json(response.data);
    } catch (e) {
        res.status(500).json({ message: 'Error accessing the database', error: "teste" });
    }
});

hoteisRouter.get('/mensagens', async (req: Request, res: Response) => {
    try {
        const response = await axios.get('http://localhost:3000/notificacao');
        res.json(response.data);
    } catch (e) {
        res.status(500).json({ message: 'Error accessing the database', error: "teste" });
    }
});

hoteisRouter.get('/hoteis/:id', async (req: Request, res: Response) => {

    try {
        const response = await axios.get(`http://localhost:3000/hoteis/${req.params.id}`);

        res.json(response.data);
    } catch (e) {
        res.status(500).json({ message: 'Error accessing the database', error: "teste" });
    }
});

hoteisRouter.post('/hoteis', async (req: Request, res: Response) => {
    try {
        console.log(req.body);
        let verificaDataReserva: boolean =false ;
        const response = await axios.get(`http://localhost:3000/hoteis/${req.body.hotelid}`);
        response.data.quartos.map((element: { numero: number; reservas: string[]; }) => {
            console.log(element.numero);
            console.log(element.reservas);
            if (element.numero == req.body.numero && !element.reservas.includes(req.body.reservas[0])) {

                element.reservas.push(req.body.reservas[0]);
                verificaDataReserva = true;
                return;
            } 
        });

        const responseAddReserva = await axios.put(`http://localhost:3000/hoteis/${req.body.hotelid}`, response.data);

        axios.post(`http://localhost:3000/notificacao`, {
            message: `Reserva no hotel ${response.data.id} no quarto ${req.body.numero} na data ${req.body.reservas[0]}`
        });
        res.json(verificaDataReserva ? responseAddReserva.data : { erro: 'Data de reserva indisponivel' });
    } catch (e) {
        res.status(500).json({ message: 'Error accessing the database', error: "teste" });
    }
});

hoteisRouter.put('/hoteis/:id', async (req: Request, res: Response) => {
    try {
        let verificaDataReservaParaExcluir: boolean = false;
        const response = await axios.get(`http://localhost:3000/hoteis/${req.params.id}`);
        response.data.quartos.map((element: { numero: number; reservas: string[]; }) => {
            console.log(element);
            if (element.numero == req.body.numero) {

                element.reservas = element.reservas.filter(x => x != req.body.reservas[0]);
            } else verificaDataReservaParaExcluir = true;
        });
        const responseAddReserva = await axios.put(`http://localhost:3000/hoteis/${req.params.id}`, response.data);

        axios.post(`http://localhost:3000/notificacao`, {
            message: `Cancelamento no hotel ${response.data.id} no quarto ${req.body.numero} na data ${req.body.reservas[0]}`
        });



        res.json(responseAddReserva.data);
    } catch (e) {
        res.status(500).json({ message: 'Error accessing the database', error: "teste" });
    }
});

app.use(route, hoteisRouter);

app.listen(3333, () => 'server running on port 3333');

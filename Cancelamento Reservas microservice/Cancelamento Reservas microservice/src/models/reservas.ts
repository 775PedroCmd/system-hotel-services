export class Reservas {
    nome: string = '';
    quartos: Quartos[] = [];
}

export class Quartos {

    numero: number = 0;
    reservas: string[] = [];

}

export class CancelQuartos {

    hotelid: number = 0;
    numero: number = 0;
    reservas: string[] = [];

}
export class Reservas {
    nome: string = '';
    quartos: Quartos[] = [];
}

export class Quartos {

    numero: number = 0;
    reservas: string[] = [];

}
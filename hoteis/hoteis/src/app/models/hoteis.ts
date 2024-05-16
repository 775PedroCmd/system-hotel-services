export class Hotel {
  nome: string = '';
  id: number = 0;
  cidade: string = '';
  disponibilidade: any = '';
  quartos: Reserva[] = [];
  acoes: string = '';
}

export class Reserva {
  numero: number = 0;
  reservas: Date = new Date();
}

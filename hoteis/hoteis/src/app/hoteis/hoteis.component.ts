import { Hotel } from './../models/hoteis';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ServiceBase } from '../services/base.service';
import { MatDialog } from '@angular/material/dialog';
import { ReservaComponent } from '../reserva/reserva.component';

@Component({
  selector: 'app-hoteis',
  templateUrl: './hoteis.component.html',
  styleUrls: ['./hoteis.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HoteisComponent implements OnInit {

  constructor(private service: ServiceBase, public dialog: MatDialog) {

  }
  hoteis: Hotel[] = [];

  ngOnInit(): void {
    this.service.findAll().subscribe(h => {
      this.hoteis = h
    });
    console.log(2, this.hoteis);
  }

  displayedColumns: string[] = ['id', 'nome', 'cidade', 'disponibilidade', 'acoes'];
  clickedRows = new Set<Hotel>();

  openDialog(hotel: Hotel): void {
    const dialogRef = this.dialog.open(ReservaComponent, {
      data: hotel.quartos,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      // this.animal = result;
    });
  }
}


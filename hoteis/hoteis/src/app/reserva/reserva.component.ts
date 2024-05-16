import { Reserva } from './../models/hoteis';
import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { ServiceBase } from '../services/base.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ReservaComponent implements OnInit {


  constructor(
    public dialogRef: MatDialogRef<ReservaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Reserva[]
  ) { }

  onNoClick(res: Reserva): void {
    this.dialogRef.close(res);
  }

  quartos: Reserva[] = [];

  ngOnInit(): void {
    this.quartos = this.data
    console.log(this.quartos);
  }

  displayedColumns: string[] = ['numero', 'acoes'];
  clickedRows = new Set<Reserva>();

}

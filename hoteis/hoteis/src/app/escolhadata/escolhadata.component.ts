import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Reserva } from '../models/hoteis';

@Component({
  selector: 'app-escolhadata',
  templateUrl: './escolhadata.component.html',
  styleUrls: ['./escolhadata.component.scss']
})
export class EscolhadataComponent implements OnInit {


  constructor(
    public dialogRef: MatDialogRef<EscolhadataComponent>,
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

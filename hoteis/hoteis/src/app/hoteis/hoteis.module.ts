import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { HoteisComponent } from './hoteis.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HoteisComponent
  }
]

@NgModule({
  declarations: [
    HoteisComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    RouterModule.forChild(routes)
  ]
})
export class HoteisModule { }

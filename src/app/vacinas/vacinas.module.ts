import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VacinasRoutingModule } from './vacinas-routing.module';
import { VacinaListagemComponent } from './vacina-listagem/vacina-listagem.component';


@NgModule({
  declarations: [
      VacinaListagemComponent
  ],
  imports: [
    CommonModule,
    VacinasRoutingModule
  ]
})
export class VacinasModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PessoasRoutingModule } from './pessoas-routing.module';
import { PessoasListagemComponent } from './pessoas-listagem/pessoas-listagem.component';
import { FormsModule } from '@angular/forms';
import { PessoasDetalhesComponent } from './pessoas-detalhes/pessoas-detalhes.component';



@NgModule({
  declarations: [PessoasListagemComponent, PessoasDetalhesComponent],
  imports: [
    CommonModule,
    PessoasRoutingModule,
    FormsModule
  ]
})
export class PessoasModule { }

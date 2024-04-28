import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PessoasRoutingModule } from './pessoas-routing.module';
import { PessoasListagemComponent } from './pessoas-listagem/pessoas-listagem.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [PessoasListagemComponent],
  imports: [
    CommonModule,
    PessoasRoutingModule,
    FormsModule
  ]
})
export class PessoasModule { }

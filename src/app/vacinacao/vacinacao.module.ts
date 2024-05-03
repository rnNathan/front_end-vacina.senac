import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VacinacaoCadastroComponent } from './vacinacao-cadastro/vacinacao-cadastro.component';
import { VacinacaoRoutingModule } from './vacinacao-routing.module';
import { VacinacaoListagemComponent } from './vacinacao-listagem/vacinacao-listagem.component';



@NgModule({
  declarations: [VacinacaoCadastroComponent, VacinacaoListagemComponent],
  imports: [
    CommonModule,
    FormsModule,
    VacinacaoRoutingModule
  ]
})
export class VacinacaoModule { }

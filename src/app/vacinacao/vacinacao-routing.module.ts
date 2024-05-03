import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VacinacaoCadastroComponent } from './vacinacao-cadastro/vacinacao-cadastro.component';
import { VacinacaoListagemComponent } from './vacinacao-listagem/vacinacao-listagem.component';


const routes: Routes = [
  { path: '', component: VacinacaoListagemComponent },
  { path: 'cadastro', component: VacinacaoCadastroComponent },
  { path: 'cadastro/:id', component: VacinacaoCadastroComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VacinacaoRoutingModule { }

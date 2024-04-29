import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PessoasListagemComponent } from './pessoas-listagem/pessoas-listagem.component';
import { PessoasDetalhesComponent } from './pessoas-detalhes/pessoas-detalhes.component';

const routes: Routes = [
  { path: '', component: PessoasListagemComponent },
  { path: 'detalhes', component: PessoasDetalhesComponent},
  { path: 'detalhes/:id', component: PessoasDetalhesComponent}



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PessoasRoutingModule { }

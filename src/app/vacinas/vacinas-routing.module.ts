import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VacinaListagemComponent } from './vacina-listagem/vacina-listagem.component';
import { VacinasDetalheComponent } from './vacinas-detalhe/vacinas-detalhe.component';

const routes: Routes = [
  { path: '', component: VacinaListagemComponent},
  { path: 'detalhes', component: VacinasDetalheComponent},
  { path: 'detalhes/:id', component: VacinasDetalheComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VacinasRoutingModule { }

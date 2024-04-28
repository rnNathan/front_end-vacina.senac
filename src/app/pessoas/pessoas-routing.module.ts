import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PessoasListagemComponent } from './pessoas-listagem/pessoas-listagem.component';

const routes: Routes = [
  { path: '', component: PessoasListagemComponent }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PessoasRoutingModule { }

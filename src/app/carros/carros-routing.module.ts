import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrosListagemComponent } from './carros-listagem/carros-listagem.component';
import { MontadoraComponent } from './montadora/montadora.component';


const routes: Routes = [
  { path: '', component: CarrosListagemComponent},
  { path: 'montadora', component: MontadoraComponent }





];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarrosRoutingModule { }

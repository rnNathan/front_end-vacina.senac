import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FormsModule } from '@angular/forms';
import { CarrosRoutingModule } from './carros-routing.module';
import { CarrosListagemComponent } from './carros-listagem/carros-listagem.component';
import { MontadoraComponent } from './montadora/montadora.component';




@NgModule({
  declarations: [CarrosListagemComponent, MontadoraComponent],
  imports: [
    CommonModule,
    CarrosRoutingModule,
    FormsModule
  ]
})
export class CarrosModule { }

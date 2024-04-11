import { Component, OnInit } from '@angular/core';
import { Vacina } from '../../shared/model/vacina';
import { VacinasService } from '../../shared/service/vacinas.service';

@Component({
  selector: 'app-vacina-listagem',
  templateUrl: './vacina-listagem.component.html',
  styleUrl: './vacina-listagem.component.css'
})
export class VacinaListagemComponent  implements OnInit{

  public vacinas: Vacina [] = []

  constructor (private VacinasService: VacinasService) {}

  ngOnInit(): void {
    this.consultarTodasVacinas();

  }

  private consultarTodasVacinas () {
    this.VacinasService.listarTodas().subscribe (
      resultado => {
        this.vacinas = resultado;
      },
      erro => {
        console.error ('erro ao consultar todas vacinas', erro);
      }

    )

  }

}

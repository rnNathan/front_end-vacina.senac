import { Component, OnInit } from '@angular/core';
import { Vacinas } from '../../shared/model/vacina';
import { VacinasService } from '../../shared/service/vacinas.service';
import { VacinaSeletor } from '../../shared/model/seletor/vacina.seleto';
import { PaisService } from '../../shared/service/pais.service';
import { Pais } from '../../shared/model/pais';
import { Pessoa } from '../../shared/model/pessoa';
import { PesquisadorService } from '../../shared/service/pesquisador.service';

@Component({
  selector: 'app-vacina-listagem',
  templateUrl: './vacina-listagem.component.html',
  styleUrl: './vacina-listagem.component.css',
})
export class VacinaListagemComponent implements OnInit {
  public vacinas: Array<Vacinas> = new Array();
  public seletor: VacinaSeletor = new VacinaSeletor();
  public paises: Array<Pais> = new Array();
  public pesquisadores: Array<Pessoa> = new Array();

  constructor(
    private VacinasService: VacinasService,
    private paisService: PaisService,
    private pesquisadorService: PesquisadorService
  ) {}

  ngOnInit(): void {
    this.consultarTodasVacinas();

    this.paisService.consultarTodosPaises().subscribe(
      (resultado) => {
        this.paises = resultado;
      },
      (erro) => {
        console.error('erro ao consultar todas paises', erro);
      }
    );

    this.pesquisadorService.consultarTodosPesquisador().subscribe(
      (resultado) => {
        this.pesquisadores = resultado;
      },
      (erro) => {
        console.error('erro ao consultar todas pesquisadores', erro);
      }
    );
  }

  private consultarTodasVacinas() {
    this.VacinasService.listarTodas().subscribe(
      (resultado) => {
        this.vacinas = resultado;
      },
      (erro) => {
        console.error('erro ao consultar todas vacinas', erro);
      }
    );
  }

  public pesquisar() {
    this.VacinasService.consultarComSeletor(this.seletor).subscribe(
      (resultado) => {
        this.vacinas = resultado;
      },
      (erro) => {
        console.error('erro ao consultar por seletor', erro);
      }
    );
  }

  public limpar() {
    this.seletor = new VacinaSeletor();
  }

  public excluir(id: number) {
    this.VacinasService.excluir(id).subscribe(
      
    );
  }
}

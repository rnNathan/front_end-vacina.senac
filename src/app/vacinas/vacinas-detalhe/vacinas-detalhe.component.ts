import { Component, OnInit } from '@angular/core';
import { VacinasService } from '../../shared/service/vacinas.service';
import { Router } from '@angular/router';
import { Vacinas } from '../../shared/model/vacina';
import { Pessoa } from '../../shared/model/pessoa';
import { Pais } from '../../shared/model/pais';
import { PesquisadorService } from '../../shared/service/pesquisador.service';
import { PaisService } from '../../shared/service/pais.service';
import Swal from 'sweetalert2';






@Component({
  selector: 'app-vacinas-detalhe',
  //standalone: true,
  //imports: [VacinasModule],
  templateUrl: './vacinas-detalhe.component.html',
  styleUrl: './vacinas-detalhe.component.css'
})
export class VacinasDetalheComponent implements OnInit {

  public pais: Array<Pais> = new Array();
  public pesquisadores: Array<Pessoa> = new Array();
  public vacina: Vacinas = new Vacinas();

  constructor(
    private vacinasService: VacinasService,
    private route: Router,
    private pesquisadorService: PesquisadorService,
    private paisService: PaisService)
     {

    }

  ngOnInit(): void {
    this.pesquisadorService.consultarPorPesquisador().subscribe(
      (resposta) => {
        this.pesquisadores = resposta;
      },
      (erro) => {
        Swal.fire('Erro ao ao consultar pesquisador!', erro, 'error');
      }
    )

    this.paisService.consultarTodosPaises().subscribe(
      (resultado) => {
        this.pais = resultado;
      },
      (erro) => {
        console.error('erro ao consultar todas paises', erro);
      }
    );


  }

  public voltar() {
    this.route.navigate(['/'])
  }

 public salvar(): void {
    this.vacinasService.salvar(this.vacina).subscribe(
      (resposta) =>
        {
          this.vacina = resposta;
          Swal.fire('Vacina salva com sucesso!', '', 'success');
          this.voltar();
        },
        (erro) => {
          Swal.fire('Erro ao salvar uma vacina!', erro, 'error');
        }

    );

  }

}

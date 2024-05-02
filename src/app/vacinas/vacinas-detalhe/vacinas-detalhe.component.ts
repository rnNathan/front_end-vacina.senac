import { Component, OnInit } from '@angular/core';
import { VacinasService } from '../../shared/service/vacinas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Vacina } from '../../shared/model/vacina';
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
  public vacina: Vacina = new Vacina();
  public idVacina: number;

  constructor(
    private vacinasService: VacinasService,
    private router: Router, // COMPONENTE PARA FAZER ROTEAMENTO ENTRA AS TELAS
    private pesquisadorService: PesquisadorService,
    private paisService: PaisService,
    private route: ActivatedRoute, //PEGAR OS PARAMETROS DA URL

  ) {

  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.idVacina = params['id'];
      if (this.idVacina) {
        this.buscarVacina();
      }
    })

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


  public salvar(): void {
    if (this.idVacina) {
      this.atualizar();

    } else {
      this.inserir();
    }
  }

  public inserir(): void {
    this.vacinasService.salvar(this.vacina).subscribe(
      (resposta) => {
        this.vacina = resposta;
        Swal.fire('Vacina salva com sucesso!', '', 'success');
        this.voltar();
      },
      (erro) => {
        Swal.fire('Erro ao salvar uma vacina!', erro, 'error');
      }

    );

  }

  public atualizar(): void {
    this.vacinasService.atualizar(this.vacina).subscribe(
      (resposta) => {
        Swal.fire('Vacina atualizada com sucesso!', '', 'success');
        this.voltar();
      },
      (erro) => {
        Swal.fire('Erro ao atualizar a vacina: ' + erro.error.mensagem, 'error');
      }

    )

  }

  public buscarVacina(): void {
    this.vacinasService.consultarPorId(this.idVacina).subscribe(
      (vacina) => {
        this.vacina = vacina;
      },
      (erro) => {
        Swal.fire('Erro ao buscar uma vacina!', erro, 'error');
      }
    )

  }

  public voltar() {
    this.router.navigate(['/vacinas'])
  }

  public compareById(r1: any, r2: any): boolean {
    return r1 && r2 ? r1.id === r2.id : r1 === r2;
  }


}

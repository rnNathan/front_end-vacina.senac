import { Component, OnInit } from '@angular/core';
import { PesquisadorService } from '../../shared/service/pesquisador.service';
import { Pessoa } from '../../shared/model/pessoa';
import { AplicacaoService } from '../../shared/service/aplicacao.service';
import { Aplicacao } from '../../shared/model/aplicacao';
import { Vacina } from '../../shared/model/vacina';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-vacinacao-cadastro',
  //standalone: true,
  //imports: [],
  templateUrl: './vacinacao-cadastro.component.html',
  styleUrl: './vacinacao-cadastro.component.css'
})
export class VacinacaoCadastroComponent implements OnInit{

  public pesquisadores: Array<Pessoa> = new Array();
  public vacinasDisponiveis: Array<Aplicacao> = new Array();
  public vacinacao: Aplicacao = new Aplicacao();
  public vacina: Vacina = new Vacina();
  public idVacinacao: number;


  constructor(private pesquisadorService: PesquisadorService, private aplicacaoService: AplicacaoService, private router: Router, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.consultarTodosPesquisadores();

    this.consultarTodasVacinasPorId();

    this.route.params.subscribe((params) => {
      this.idVacinacao = params['idVacinacao'];
      if (this.idVacinacao) {
        this.buscarAplicacoes();
      }
    })

  }


  consultarTodosPesquisadores(){
    this.pesquisadorService.consultarPorPesquisador().subscribe(
      resultado => {
        this.pesquisadores = resultado;
      },
      erro => {
        console.error('Erro ao consultarTodosPesquisadores.', erro);

      }

    );

  }

  consultarTodasVacinasPorId() {
    this.aplicacaoService.consultarTodasVacinasPorId(this.vacina.id).subscribe(
      resultado => {
        this.vacinasDisponiveis = resultado;
      },
      erro => {
        console.error('Erro ao consultar todas vacinas por id.', erro);
      }
    )
  }




  salvar(): void {
    if(this.idVacinacao){
      this.atualizar();
    } else {
      this.inserir();
    }
  }



  inserir(){
    this.aplicacaoService.inserir(this.vacinacao).subscribe(
      resultado => {
        this.vacinacao = resultado;
        Swal.fire('Sucesso!', 'Aplicação cadastrada', 'success')
      },
      erro => {
        Swal.fire('Erro ao salvar aplicação!', erro, 'error' );

      }

    )

  }

  atualizar(){
    this.aplicacaoService.atualizar(this.vacinacao).subscribe(
      resultado => {
        Swal.fire('Aplicação atualizada com sucesso!', '', 'success');
        this.voltar();
      },
      erro => {
        Swal.fire('Erro ao atualizar', erro.error.mensagem, 'error' );
      }
    )
  }

  voltar() {
    this.router.navigate(['/vacinas'])
  }

  buscarAplicacoes() {
    this.aplicacaoService.consultarPorId(this.idVacinacao).subscribe(
      vacinacao => {
        this.vacinacao = vacinacao;
      },
      erro => {
        Swal.fire('Erro em buscar aplicações', erro, 'error');
      }
    )

  }

}

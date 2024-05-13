import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../../shared/model/pessoa';
import { PesquisadorService } from '../../shared/service/pessoa.service';
import { PaisService } from '../../shared/service/pais.service';
import { Pais } from '../../shared/model/pais';
import { PessoaSeletor } from '../../shared/model/seletor/pessoa.seletor';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pessoas-listagem',
  // standalone: true,
  // imports: [],
  templateUrl: './pessoas-listagem.component.html',
  styleUrl: './pessoas-listagem.component.css'
})
export class PessoasListagemComponent implements OnInit {


  public pessoas: Array<Pessoa> = new Array();
  public paises: Array<Pais> = new Array();
  public seletor: PessoaSeletor = new PessoaSeletor();



  constructor(private pessoaService: PesquisadorService,
    private paisService: PaisService,private router: Router) { }

  ngOnInit(): void {
    this.consultarTodosPaises();
    this.consultarTodasAsPessoas();

  }

  private consultarTodosPaises() {
    this.paisService.consultarTodosPaises().subscribe(
      resultado => {
        this.paises = resultado;
      },
      erro => {
        console.error('Erro ao consultar todos os paises', erro);
      }
    )
  }

  private consultarTodasAsPessoas() {
    this.pessoaService.consultarTodasPessoas().subscribe(
      (resultado) => {
        this.pessoas = resultado;

      },
      (erro) => {
        console.error('Erro ao listar todas as Pessoas ', erro)
      }

    )
  };

  public pesquisar() {
    this.pessoaService.consultarPorSeletor(this.seletor).subscribe(
      resultado => {
        this.pessoas = resultado;
      },
      erro => {
        console.error('Erro ao consultar com seletor pessoa.', erro);
      }
    );
  }

  public limpar() {
    this.seletor = new PessoaSeletor();
  }

  public excluir(pessoaSelecionada: Pessoa) {
    Swal.fire({
      title: 'Deseja excluir a pessoa?',
      text: 'Essa ação não poderá ser desfeita',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'sim, excluir!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.pessoaService.excluir(pessoaSelecionada.id).subscribe(
          (resultado) => {
            Swal.fire('Sucesso!', 'Excluido com sucesso.', 'success');
            this.pesquisar();

          },
          (erro) => {
            Swal.fire('Erro!', 'Erro ao excluir pessoa: ' + erro.error.mensagem, 'error');
          }

        );
      }

    });
  }

  public editar(idPessoaSelecionada: number) {
    this.router.navigate(['/pessoas/detalhes/', idPessoaSelecionada]);
  }

}

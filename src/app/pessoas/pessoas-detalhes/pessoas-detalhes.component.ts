import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../shared/service/pais.service';
import { Pais } from '../../shared/model/pais';
import { Pessoa } from '../../shared/model/pessoa';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { PesquisadorService } from '../../shared/service/pessoa.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pessoas-detalhes',
  //standalone: true,
  //imports: [],
  templateUrl: './pessoas-detalhes.component.html',
  styleUrl: './pessoas-detalhes.component.css'
})
export class PessoasDetalhesComponent implements OnInit{

  public pais: Array<Pais> = new Array();
  public pessoa: Pessoa = new Pessoa();
  public idPessoa: number;


  constructor(private paisService: PaisService,
    private pessoaService: PesquisadorService,
    private route: ActivatedRoute,
    private router: Router,


  ) {

  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.idPessoa = params['id'];
      if (this.idPessoa) {
        this.buscarPessoa();
      }
    })
  
    this.paisService.consultarTodosPaises().subscribe(
      (resultado) => {
        this.pais = resultado;
      },
      (erro) => {
        console.error('erro ao consultar todas paises', erro);
      }
    );
   
  }

  public inserir(): void {
    this.pessoaService.inserir(this.pessoa).subscribe(
      (resposta) => {
        this.pessoa = resposta;
        Swal.fire('Pessoa salva com sucesso!', '', 'success');
        this.voltar();
      },
      (erro) => {
        Swal.fire('Erro ao salvar uma Pessoa!', erro, 'error');
      }

    );

  }

  public salvar(): void {
    if (this.idPessoa) {
      this.atualizar();

    } else {
      this.inserir();
    }
  }


  public buscarPessoa() {
    this.pessoaService.consultarPessoaPorId(this.idPessoa).subscribe (
      pessoa => {
        this.pessoa = pessoa;
      },
      erro => {
        Swal.fire('Erro ao buscar por id uma pessoa.')
      }
    )
  }

  public atualizar(): void {
    this.pessoaService.atualizar(this.pessoa).subscribe(
      (resposta) => {
        Swal.fire('Pessoa atualizada com sucesso!', '', 'success');
        this.voltar();
      },
      (erro) => {
        Swal.fire('Erro ao atualizar a pessoa: ' + erro.error.mensagem, 'error');
      }

    )

  }
  

  public voltar() {
    this.router.navigate(['/pessoas'])
  }


}

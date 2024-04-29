import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../../shared/model/pessoa';
import { PesquisadorService } from '../../shared/service/pesquisador.service';
import { PaisService } from '../../shared/service/pais.service';
import { Pais } from '../../shared/model/pais';

@Component({
  selector: 'app-pessoas-listagem',
 // standalone: true,
 // imports: [],
  templateUrl: './pessoas-listagem.component.html',
  styleUrl: './pessoas-listagem.component.css'
})
export class PessoasListagemComponent implements OnInit{

  public pessoas: Array<Pessoa> = new Array();
  public paises: Array<Pais> = new Array();


  constructor(private pessoaService: PesquisadorService,
    private paisService: PaisService){}

  ngOnInit(): void {
    this.consultarTodosPaises()

  }

  consultarTodosPaises(){
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

    )};

    pesquisar(){
      
    }

}

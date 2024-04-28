import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../../shared/model/pessoa';
import { PesquisadorService } from '../../shared/service/pesquisador.service';

@Component({
  selector: 'app-pessoas-listagem',
 // standalone: true,
 // imports: [],
  templateUrl: './pessoas-listagem.component.html',
  styleUrl: './pessoas-listagem.component.css'
})
export class PessoasListagemComponent implements OnInit{

  public pessoas: Array<Pessoa> = new Array();

  constructor(private pessoaService: PesquisadorService){}

  ngOnInit(): void {
    this.consultarTodasAsPessoas();

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

}

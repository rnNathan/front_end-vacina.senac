import { Component, OnInit } from '@angular/core';
import { Vacinas } from '../../shared/model/vacina';
import { VacinasService } from '../../shared/service/vacinas.service';
import { VacinaSeletor } from '../../shared/model/seletor/vacina.seleto';
import { PaisService } from '../../shared/service/pais.service';
import { Pais } from '../../shared/model/pais';
import { Pessoa } from '../../shared/model/pessoa';
import { PesquisadorService } from '../../shared/service/pesquisador.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vacina-listagem',
  //standalone: true,
  templateUrl: './vacina-listagem.component.html',
  styleUrl: './vacina-listagem.component.css',
})
export class VacinaListagemComponent implements OnInit {

  //MEUS OBJETOS
  public vacinas: Array<Vacinas> = new Array();
  public seletor: VacinaSeletor = new VacinaSeletor();
  public paises: Array<Pais> = new Array();
  public pesquisadores: Array<Pessoa> = new Array();

  //DECLARAR NO CONSTRUTOR TODAS AS CLASSES QUE VOCÊ QUER UTILIZAR, PODENDO VISUALIZAR METODOS FEITOS DENTRO DESSAS CLASSES.
  constructor(
    private VacinasService: VacinasService,
    private paisService: PaisService,
    private pesquisadorService: PesquisadorService,
    private router: Router
  ) { }

  //ngOnInit É TODOS OS METODOS QUE VAI APARECER ASSIM QUE ABRIR A PÁGINA.
  ngOnInit(): void {
    //UTILIZANDO O METODO ASSIM QUE MOSTRO A TELA E LISTA TODAS AS VACINAS.
    this.consultarTodasVacinas();

    //METODO PARA CONSULTAR TODOS OS PAISES, UTILIZANDO UM SCROOL PARA ROLAR E PROCURAR DIRETAMENTE DO BACK END OS PAISES CADASTRADOS.
    this.consultarTodosOsPaises();

    //METODO PARA CONSULTAR TODAS AS PESSOAS ASSIM QUE APARECE A TELA DE LISTAGEM.
    this.consultarSomentePesquisador();

  }

  private consultarSomentePesquisador() {
  this.pesquisadorService.consultarPorPesquisador().subscribe(
    (resultado) => {
      this.pesquisadores = resultado;
    },
    (erro) => {
      console.error('erro ao consultar todas pesquisadores', erro);
    }
  );
}

  private consultarTodosOsPaises() {
  this.paisService.consultarTodosPaises().subscribe(
    (resultado) => {
      this.paises = resultado;
    },
    (erro) => {
      console.error('erro ao consultar todas paises', erro);
    }
  );

  }
  //METODO PARA CONSULTAR TODAS AS VACINAS.
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

  //USADO NO BOTÃO PARA PESQUISAR, ELE UTILIZA A CONSULTA FEITA PELO SELETOR, TENDO TODOS OS FILTROS NO METODO DO BACK-AND.
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

  //BOTÃO PARA LIMPAR OS INPUTS
  public limpar() {
    this.seletor = new VacinaSeletor();
  }

  //METODO PARA EXCLUIR, UTILIZA UMA MENSAGEM CASO QUEIRA EXCLUIR OU NÃO (UTILIZANDO BIBLIOTECA SWEETALERT2)
  public excluir(vacinaSelecionada: Vacinas) {
    Swal.fire({
      title: 'Deseja excluir vacina?',
      text: 'Essa ação não poderá ser desfeita',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'sim, excluir!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.VacinasService.excluir(vacinaSelecionada.id).subscribe(
          (resultado) => {
            this.pesquisar();
          },
          (erro) => {
            Swal.fire('Erro!', 'Erro ao excluir vacina: ' + erro.error.mensagem, 'error');
          }

        );
      }

    });
  }
  //BOTÃO CRIADO PARA EDITAR E ESTÁ DIFERECIONANDO PARA O CAMINHO QUE INDICA O VACINAS-DETALHES.COMPONENT.TS
  public editar(idVacinaSelecionada: number) {
    this.router.navigate(['/vacinas/detalhes/', idVacinaSelecionada]);
  }


}

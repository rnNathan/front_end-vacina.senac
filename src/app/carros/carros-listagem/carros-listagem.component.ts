import { Component, OnInit } from '@angular/core';
import { CarrosService } from '../../shared/service/carros.service';
import { CarroSeletor } from '../../shared/model/seletor/carro.seletor';
import { Carro } from '../../shared/model/carro';
import Swal from 'sweetalert2';
import { MontadoraService } from '../../shared/service/montadora.service';
import { Montadora } from '../../shared/model/montadora';

@Component({
  selector: 'app-carros-listagem',
  //standalone: true,
  //imports: [],
  templateUrl: './carros-listagem.component.html',
  styleUrl: './carros-listagem.component.css'
})
export class CarrosListagemComponent  implements OnInit{

  public listaCarros: Array<Carro> = Array();
  public carroSeletor: CarroSeletor = new CarroSeletor();
  public montadoras: Array<Montadora> = new Array();


  constructor (private carroService: CarrosService,
    private montadoraService: MontadoraService) {}


  ngOnInit(): void {
    this.pesquisar();
    this.montadoraService.consultarTodas().subscribe(
      resultado => {
       this.montadoras = resultado;
      },
      erro => {
        Swal.fire('Erro!', 'Erro ao pesquisar por todos: ' + erro.error.mensagem, 'error');
      }
    )

  }

 public pesquisar() {
  this.carroService.consultarComFiltros(this.carroSeletor).subscribe(
    resultado => {
      this.listaCarros = resultado;
      if(this.listaCarros.length === 0) {
        Swal.fire('Nenhum carro encontrado');
      }
    },
    erro => {
      Swal.fire('Erro!', 'Erro ao pesquisar por filtro: ' + erro.error.mensagem, 'error');

    }

  )

 }

 public limpar() {
  this.carroSeletor = new CarroSeletor();
}


}

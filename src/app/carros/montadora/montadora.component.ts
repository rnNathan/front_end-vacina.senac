import { Component, OnInit } from '@angular/core';
import { MontadoraService } from '../../shared/service/montadora.service';
import { Montadora } from '../../shared/model/montadora';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-montadora',
 // standalone: true,
  //imports: [],
  templateUrl: './montadora.component.html',
  styleUrl: './montadora.component.css'
})
export class MontadoraComponent implements OnInit {


  public montadoras: Array<Montadora> = new Array();
  public montadora: Montadora = new Montadora();


  constructor(private montadoraService: MontadoraService) {

  }

  ngOnInit(): void {
    this.listarTodasMontadoras();

  }

  consultarCarrosEmEstoque(montadora: Montadora) {
    if(montadora.id === null && montadora.id === '') {
      Swal.fire('Erro!','Selecione uma montadora.', 'warning')
    }
    this.montadoraService.consultarEstoqueCarros(this.montadora.id).subscribe(
      resultado => {
        Swal.fire('Em estoque', 'Carros: ' + resultado, 'success');
      },
      erro => {
        Swal.fire('Erro ao encontrar carro em estoque', erro, 'error');
      }
    )

  }


  listarTodasMontadoras() {
    this.montadoraService.consultarTodas().subscribe(
      resultado => {
        this.montadoras = resultado;
      },
      erro => {
        console.error('error', erro);
      }
    )
  }

  public compareById(r1: any,r2: any):  boolean {
    return r1 && r2 ? r1.id === r2.id : r1 === r2;
    }
}

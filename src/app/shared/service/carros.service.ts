import { Carro } from './../model/carro';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CarroSeletor } from '../model/seletor/carro.seletor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarrosService {

  constructor(private httpClient: HttpClient) { }

  private readonly API = 'http://localhost:8080/senac-20241-backend-exemplos/rest/carro';

  public consultarComFiltros(seletor: CarroSeletor): Observable<Array<Carro>> {
    return this.httpClient.post<Array<Carro>>(this.API + '/filtro', seletor);
  }







}

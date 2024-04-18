import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vacinas } from '../model/vacina';
import { VacinaSeletor } from '../model/seletor/vacina.seleto';


@Injectable({
  providedIn: 'root'
})

export class VacinasService {

  //http://localhost:8080/vacina-o_senac.2024
  private readonly API = 'http://localhost:8080/vacina-o_senac.2024/rest/vacina';

  constructor(private httpClient: HttpClient) { }

  public listarTodas(): Observable <Array<Vacinas>> {
    return this.httpClient.get<Array<Vacinas>>(this.API + "/listarTodos");

  }

  public consultarPorId(id: number): Observable <Vacinas> {
    return this.httpClient.get<Vacinas>(this.API + '/' + id);

  }

  public consultarComSeletor(seletor: VacinaSeletor): Observable <Array<Vacinas>> {
    return this.httpClient.post<Array<Vacinas>>(this.API + "/filtro", seletor)
  }

  public excluir(id: number):Observable<boolean> {
    return this.httpClient.delete<boolean>(this.API + "/" + id);
  }


}

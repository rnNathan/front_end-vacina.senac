import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aplicacao } from '../model/aplicacao';



@Injectable({
  providedIn: 'root'
})
export class AplicacaoService {

  private readonly API = 'http://localhost:8080/vacina-o_senac.2024/rest/vacinacao';

  constructor(private httpClient: HttpClient) { }

  inserir(vacinacao: Aplicacao):Observable<Aplicacao> {
    return this.httpClient.post<Aplicacao>(this.API + '/inserir', vacinacao);
  }

  atualizar(alterar: Aplicacao): Observable<Aplicacao>{
    return this.httpClient.post<Aplicacao>(this.API + '/alterar', alterar);
  }

  excluir (id: number):Observable<boolean> {
    return this.httpClient.delete<boolean>(this.API + '/excluir' + id);
  }

  consultarPorId(id: number):Observable<Aplicacao>{
    return this.httpClient.get<Aplicacao>(this.API + '/' + id);
  }

  consultarTodasAplicacoes():Observable<Array<Aplicacao>>{
    return this.httpClient.get<Array<Aplicacao>>(this.API + '/listarTodos');
  }

  consultarTodasVacinasPorId(id: number):Observable<Array<Aplicacao>>{
    return this.httpClient.get<Array<Aplicacao>>(this.API + '/vacinas/' + id );
  }

}

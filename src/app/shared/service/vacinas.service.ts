import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vacina } from '../model/vacina';
import { VacinaSeletor } from '../model/seletor/vacina.seleto';


@Injectable({
  providedIn: 'root'
})

export class VacinasService {

  //http://localhost:8080/vacina-o_senac.2024
  private readonly API = 'http://localhost:8080/vacina-o_senac.2024/rest/vacina';

  constructor(private httpClient: HttpClient) { }

  public listarTodas(): Observable <Array<Vacina>> {
    return this.httpClient.get<Array<Vacina>>(this.API + '/listarTodos');

  }
  public consultarPorId(id: number): Observable <Vacina> {
    return this.httpClient.get<Vacina>(this.API + '/' + id);

  }
  public consultarComSeletor(seletor: VacinaSeletor): Observable <Array<Vacina>> {
    return this.httpClient.post<Array<Vacina>>(this.API + '/filtro', seletor);
  }


  public inserir(vacina: Vacina): Observable<Vacina> {
    return this.httpClient.post<Vacina>(this.API + '/inserir', vacina);
  }

  public excluir(id: number):Observable<boolean> {
    return this.httpClient.delete<boolean>(this.API + '/excluir/' + id);
  }

  public atualizar(vacina: Vacina):Observable<boolean> {
    return this.httpClient.put<boolean>(this.API + '/alterar', vacina);
  }

  public contarTotalRegistro(seletor:VacinaSeletor):Observable<number>{
    return this.httpClient.post<number>(this.API + '/contar',seletor);
  }

  public contarPaginas(seletor: VacinaSeletor):Observable<number> {
    return this.httpClient.post<number>(this.API + '/contar-pagina', seletor);
  }


}

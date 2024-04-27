import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pessoa } from '../model/pessoa';

@Injectable({
  providedIn: 'root'
})
export class PesquisadorService {


  private readonly API = 'http://localhost:8080/vacina-o_senac.2024/rest/pessoa';

  constructor(private httpCliente: HttpClient) { }

  public consultarTodasPessoas():Observable<Array<Pessoa>> {
    return this.httpCliente.get<Array<Pessoa>>(this.API + '/listar')
  };

  public consultarPorPesquisador():Observable<Array<Pessoa>> {
    return this.httpCliente.get<Array<Pessoa>>(this.API + '/pesquisadores')
  };

  public consultarPessoaPorId(id: number):Observable<Pessoa> {
    return this.httpCliente.get<Pessoa>(this.API + '/' + id);
  }

  public inserir(pessoa: Pessoa):Observable<any> {
    return this.httpCliente.post<Pessoa>(this.API + '/inserir', pessoa)
  }

  public atualizar(pessoa: Pessoa):Observable<any> {
    return this.httpCliente.put(this.API + '/atualizar', pessoa);

  }

  public excluir(id: number):Observable<boolean> {
    return this.httpCliente.delete<boolean>(this.API + '/excluir/' + id)
  }

}

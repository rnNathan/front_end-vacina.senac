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

  public consultarTodosPesquisador():Observable<Array<Pessoa>> {
    return this.httpCliente.get<Array<Pessoa>>(this.API + "/listar")
  }

}

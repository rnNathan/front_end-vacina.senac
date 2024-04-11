import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vacina } from '../model/vacina';


@Injectable({
  providedIn: 'root'
})
export class VacinasService {

private readonly API = 'http://localhost:8080/vacina-o_senac.2024/rest/vacina';

  constructor(private httpClient: HttpClient) { }

  listarTodas(): Observable <Array<Vacina>> {
    return this.httpClient.get<Array<Vacina>>(this.API + '/listarTodos');

  }

  consultarPorId(id: number): Observable <Vacina> {
    return this.httpClient.get<Vacina>(this.API + '/' + id);

  }
}

import { Pais } from './pais';
import { Pessoa } from './pessoa';


export interface Vacinas {

  id: number,
  nome: string,
  paisOrigem: Pais,
  pesquisador: Pessoa,
  estagio: number,
  dataInicioPesquisa: Date,
  //mediaVacina: number

}

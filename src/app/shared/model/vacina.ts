import { Pais } from './pais';
import { Pessoa } from './pessoa';


export interface Vacina {

  id: number,
  nome: string,
  paisOrigem: Pais,
  pesquisador: Pessoa,
  estagio: number,
  dataInicioPesquisa: Date,
  //mediaVacina: number

}

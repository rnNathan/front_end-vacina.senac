import { Pais } from './pais';
import { Pessoa } from './pessoa';


export class Vacinas {

  id: number;
  nome: string;
  paisOrigem: Pais;
  pesquisador: Pessoa;
  estagio: number;
  dataInicioPesquisa: Date;
  //mediaVacina: number

}

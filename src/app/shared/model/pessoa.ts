import { Pais } from "./pais";

export class Pessoa {
  id: number;
  nome: string;
  cpf: string;
  sexo: string;
  dataNascimento: Date;
  tipoPessoaCadastrada: number;
  paisOrigem: Pais;

}

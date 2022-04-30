export type Jogos = {
  _id?: string;
  titulo: string;
  capa: string;
  photos: string[];
  preco: number;
  dt_lancamento: Date;
  generos: string[];
  descricao: string;
  createdAt: Date;
};

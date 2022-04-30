import { Jogos } from '@prisma/client';

interface IGamesRepository {
  create: (data: Jogos) => Promise<Jogos | []>;
  getGame: (_id: string) => Promise<Jogos | null>;
  listGames: () => Promise<Jogos[] | undefined>;
}

export { IGamesRepository };

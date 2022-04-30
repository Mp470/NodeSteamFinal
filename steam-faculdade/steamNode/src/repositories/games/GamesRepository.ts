import { Jogos } from '@prisma/client';
import { prismaCliente } from '../../infra/prismCliente';
import { ErrorHandler } from '../../utils/error/ErrorHandler';
import { IGamesRepository } from '../interface/IGamesRepository';

class GamesRepository implements IGamesRepository {
  async create({
    titulo,
    capa,
    photos,
    preco,
    dt_lancamento,
    generos,
    descricao,
  }: Omit<Jogos, 'id'>): Promise<any> {
    try {
      const createUser = await prismaCliente.jogos.create({
        data: {
          titulo,
          capa,
          photos,
          preco,
          dt_lancamento,
          generos,
          descricao,
        },
      });

      return createUser;
    } catch (error) {
      throw new ErrorHandler('Internal Server Error', 500);
    } finally {
      await prismaCliente.$disconnect();
    }
  }

  async getGame(_id: string): Promise<any> {
    try {
      const findGame = await prismaCliente.jogos.findFirst({
        where: {
          id: _id,
        },
      });

      return findGame;
    } catch (error) {
      throw new ErrorHandler('Internal Server Error', 500);
    } finally {
      await prismaCliente.$disconnect();
    }
  }

  async listGames(): Promise<any> {
    try {
      const getAll = await prismaCliente.jogos.findMany();

      return getAll;
    } catch (error) {
      throw new ErrorHandler('Internal Server Error', 500);
    } finally {
      await prismaCliente.$disconnect();
    }
  }
}

export { GamesRepository };

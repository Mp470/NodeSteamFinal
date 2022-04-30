import { Jogos } from '.prisma/client';
import { GamesRepository } from '../../repositories/games/GamesRepository';
import { ErrorHandler } from '../../utils/error/ErrorHandler';

interface IResponse {
  status: number;
  data: Jogos | any;
}

class GamesService {
  constructor(private readonly gamesRepository: GamesRepository) {}

  async createGame(data: Omit<Jogos, 'id'>): Promise<IResponse> {
    const game = await this.gamesRepository.create(data);

    if (!game) throw new ErrorHandler('Error to create a game', 400);

    const responseResult = {
      status: 201,
      data: game,
    };

    return responseResult;
  }

  async getGame(_id: string): Promise<IResponse> {
    const game = await this.gamesRepository.getGame(_id);

    if (!game) throw new ErrorHandler('Not Found', 404);

    const responseResult = {
      status: 200,
      data: game,
    };

    return responseResult;
  }

  async listAllGames(): Promise<IResponse> {
    const games = await this.gamesRepository.listGames();

    if (!games) throw new ErrorHandler('There are not games available', 404);

    const resultResponse = {
      status: 200,
      data: games,
    };

    return resultResponse;
  }
}

export { GamesService };

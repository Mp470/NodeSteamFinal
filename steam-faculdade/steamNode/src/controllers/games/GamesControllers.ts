import { Jogos } from '@prisma/client';
import { Request, Response } from 'express';
import { GamesService } from '../../services/games/GamesService';

class GamesControllers {
  constructor(private readonly gamesService: GamesService) {}

  async handleCreate(request: Request, response: Response) {
    const data: Jogos = request.body;

    const createGame = await this.gamesService.createGame(data);
    return response.json(createGame);
  }

  async handleGetGame(request: Request, response: Response) {
    const { id } = request.params;

    return response.json(await this.gamesService.getGame(id));
  }

  async handleListGames(request: Request, response: Response) {
    const list = await this.gamesService.listAllGames();

    return response.json(list);
  }
}

export { GamesControllers };

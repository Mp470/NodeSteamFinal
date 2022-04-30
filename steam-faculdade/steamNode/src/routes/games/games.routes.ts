import { Request, Response, Router } from 'express';
import { gamesFactories } from '../../factories/';

const gamesRouter = Router();

const gamesController = gamesFactories();

gamesRouter.post('/create', (request: Request, response: Response) =>
  gamesController.handleCreate(request, response)
);

gamesRouter.get('/getById/:id', (request: Request, response: Response) =>
  gamesController.handleGetGame(request, response)
);

gamesRouter.get('/list', (request: Request, response: Response) =>
  gamesController.handleListGames(request, response)
);

export { gamesRouter };

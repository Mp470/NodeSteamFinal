import { Request, Response, Router } from 'express';
import { friendsFactories } from '../../factories';

const friendsRouter = Router();

const friendsController = friendsFactories();

friendsRouter.post('/create', (request: Request, response: Response) =>
  friendsController.handleCreateFriend(request, response)
);
friendsRouter.get('/getFriend/:id', (request: Request, response: Response) =>
  friendsController.handleGetFriend(request, response)
);
friendsRouter.get('/listFriends', (request: Request, response: Response) =>
  friendsController.handleListFriend(request, response)
);

export { friendsRouter };

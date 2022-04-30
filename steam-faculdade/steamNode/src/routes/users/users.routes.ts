import { Request, Response, Router } from 'express';
import { userFactories } from '../../factories';

const usersRouter = Router();

const userController = userFactories();

usersRouter.post('/create', (request: Request, response: Response) =>
  userController.handleCreateUser(request, response)
);

usersRouter.get('/getUser/:id', (request: Request, response: Response) =>
  userController.handleGetUser(request, response)
);

usersRouter.get('/listUser', (request: Request, response: Response) =>
  userController.handleListUser(request, response)
);

usersRouter.delete('/deleteUser/:id', (request: Request, response: Response) =>
  userController.handleDeleteUser(request, response)
);

export { usersRouter };

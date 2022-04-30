import { Request, Response, Router } from 'express';

import { storeFactories } from '../../factories';

const storeRouter = Router();

const storeController = storeFactories();

storeRouter.post('/createWeek', (request: Request, response: Response) =>
  storeController.handlerCreateWeek(request, response)
);
storeRouter.get('/getWeek/:id', (request: Request, response: Response) =>
  storeController.handlerGetWeekDeal(request, response)
);

storeRouter.delete('/deleteWeek/:id', (request: Request, response: Response) =>
  storeController.handlerDeleteWeekDeal(request, response)
);

export { storeRouter };

import { Request, Response, Router } from 'express';
import { cartRouter } from './cart/cart.routes';
import { friendsRouter } from './friends/friends.routes';
import { gamesRouter } from './games/games.routes';
import { storeRouter } from './store/store.routes';
import { usersRouter } from './users/users.routes';

const router = Router();

router.get('/live', (request: Request, response: Response) =>
  response.json({ ok: 'Working....' })
);

router.use('/games', gamesRouter);
router.use('/friends', friendsRouter);
router.use('/carts', cartRouter);
router.use('/users', usersRouter);
router.use('/store', storeRouter);

export { router };

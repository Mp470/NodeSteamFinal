import { Request, Response, Router } from 'express';
import { cartFacotories } from '../../factories';

const cartRouter = Router();

const cartController = cartFacotories();

cartRouter.post('/createCart', (request: Request, response: Response) =>
  cartController.handleCreateCart(request, response)
);

cartRouter.put('/addItem', (request: Request, response: Response) =>
  cartController.handlerAddItem(request, response)
);

cartRouter.put('/checkout/:id', (request: Request, response: Response) =>
  cartController.handlerCheckout(request, response)
);

cartRouter.put('/removeItem', (request: Request, response: Response) =>
  cartController.handlerRemoveItem(request, response)
);

cartRouter.delete('/deleteCart/:id', (request: Request, response: Response) =>
  cartController.handleDeleteCart(request, response)
);

cartRouter.get('/userCart/:id', (request: Request, response: Response) =>
  cartController.handleGetCart(request, response)
);

export { cartRouter };

import { Request, Response } from 'express';
import { ShoppingCartService } from '../../services/cart/ShoppingCartService';

class ShoppingCartController {
  constructor(private readonly shoppingCartService: ShoppingCartService) {}

  async handleCreateCart(request: Request, response: Response) {
    const { userId, jogoId } = request.body;

    const cartService = await this.shoppingCartService.createCart(
      userId,
      jogoId
    );

    response.json(cartService);
  }

  async handlerAddItem(request: Request, response: Response) {
    const { userId, jogosId } = request.body;

    const addItem = await this.shoppingCartService.addNewItem(userId, jogosId);

    response.json(addItem);
  }

  async handlerCheckout(request: Request, response: Response) {
    const { userId } = request.params;

    const checkout = await this.shoppingCartService.checkoutCart(userId);

    return response.json(checkout);
  }

  async handlerRemoveItem(request: Request, response: Response) {
    const { deleteJogoId, userId } = request.body;

    const removeItem = await this.shoppingCartService.removeItemFromCart(
      userId,
      deleteJogoId
    );

    return response.json(removeItem);
  }

  async handleDeleteCart(request: Request, response: Response) {
    const { userdId } = request.params;

    const result = await this.shoppingCartService.deleteCart(userdId);

    response.json({
      status: 'ok',
      result,
    });
  }

  async handleGetCart(request: Request, response: Response) {
    const { userdId } = request.params;

    const getCart = await this.shoppingCartService.findCart(userdId);

    return response.json(getCart);
  }
}

export { ShoppingCartController };

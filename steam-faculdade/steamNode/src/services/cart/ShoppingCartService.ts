import { Jogos } from '@prisma/client';
import { ShoppingCartRepository } from '../../repositories/cart/ShoppingCartRepository';
import { GamesRepository } from '../../repositories/games/GamesRepository';
import { ErrorHandler } from '../../utils';
import { totalToPay } from '../../utils/calculate/calculateTotal';
import { CartResponse } from '../../utils/enum/cart-enums';

class ShoppingCartService {
  constructor(
    private shoppingCartRepository: ShoppingCartRepository,
    private gamesRepository: GamesRepository
  ) {}

  async checkoutCart(userId: string) {
    const newGameDetails: Jogos[] = [];

    const findCartIfExist = await this.shoppingCartRepository.findCart(userId);

    if (findCartIfExist === null) {
      throw new ErrorHandler('Cart nof found!', 404);
    }

    const itens = findCartIfExist.jogos.length;

    for (let i = 0; i < itens; i++) {
      const result = await this.gamesRepository.getGame(
        findCartIfExist.jogos[i]
      );

      newGameDetails.push(result);
    }

    const total = totalToPay(newGameDetails);
    const qtdItens = newGameDetails.length;

    await this.shoppingCartRepository.updateCart(findCartIfExist.id, total);

    const checkout = {
      msg: CartResponse.PRODUCT_CHECKOUT_MSG,
      total,
      qtdItens,
    };

    return checkout;
  }

  async addNewItem(userId: string, newGame: string[]) {
    const newGameDetails: Jogos[] = [];

    const findCartIfExist = await this.shoppingCartRepository.findCart(userId);

    if (findCartIfExist === null) throw new ErrorHandler('Cart Not Found', 404);

    const itensInMyCart = findCartIfExist.jogos;

    findCartIfExist.jogos.forEach((jogoId: string) => {
      const alreadyInCart = newGame.includes(jogoId);

      if (alreadyInCart) throw new ErrorHandler('Item already included', 500);
    });

    itensInMyCart.push(...newGame);

    for (let i = 0; i < itensInMyCart.length; i++) {
      const result = await this.gamesRepository.getGame(itensInMyCart[i]);

      newGameDetails.push(result);
    }

    const cart = {
      ...findCartIfExist,
      jogos: itensInMyCart,
      total: totalToPay(newGameDetails),
    };
    console.log(cart);

    const { msg, cart: updatedCart } =
      await this.shoppingCartRepository.addItem(cart);

    const response = {
      msg,
      itensInCart: updatedCart.jogos.length,
    };

    return response;
  }

  async createCart(userId: string, jogosId: string[]) {
    const gameDetails: Jogos[] = [];

    const findCartIfExist = await this.shoppingCartRepository.findCart(userId);

    for (let i = 0; i < jogosId.length; i++) {
      const result = await this.gamesRepository.getGame(jogosId[i]);

      gameDetails.push(result);
    }

    if (findCartIfExist === null) {
      const newCart = {
        userId,
        jogos: jogosId,
        total: totalToPay(gameDetails),
      };

      const { msg, cart } = await this.shoppingCartRepository.createCart(
        newCart
      );

      const newcartResponse = {
        msg,
        cart: {
          ...cart,
          jogos: gameDetails,
        },
      };

      return newcartResponse;
    }

    const foundedCart = {
      msg: CartResponse.NEW_CART_MSG,
      cart: {
        ...findCartIfExist,
        jogos: gameDetails,
      },
    };

    return foundedCart;
  }

  async findCart(userId: string) {
    const findCart = await this.shoppingCartRepository.findCart(userId);

    if (findCart === null) {
      throw new ErrorHandler('Cart Not Found', 404);
    }

    const jogoDetails: Jogos[] = [];

    for (let i = 0; i < findCart.jogos.length; i++) {
      const jogosId = findCart.jogos[i];

      const jogos = await this.gamesRepository.getGame(jogosId);

      jogoDetails.push(jogos);
    }

    const response = {
      ...findCart,
      jogos: jogoDetails,
    };

    return response;
  }

  async removeItemFromCart(userId: string, deleteJogoId: string) {
    const findCart = await this.shoppingCartRepository.findCart(userId);

    if (findCart === null) {
      throw new ErrorHandler('Cart Not Found', 404);
    }

    const hasItem = findCart.jogos.includes(deleteJogoId);

    if (!hasItem) {
      throw new ErrorHandler('This item do not exist in you cart!', 404);
    }

    findCart.jogos.splice(findCart.jogos.indexOf(deleteJogoId), 1);

    const removedCart = await this.shoppingCartRepository.removeItem(findCart);

    const response = {
      removedItem: deleteJogoId,
      updatedItem: removedCart,
    };

    return response;
  }

  async deleteCart(userdId: string) {
    const cart = await this.shoppingCartRepository.findCart(userdId);

    if (cart === null) {
      throw new ErrorHandler('Cart Not Found', 404);
    }
    const deleted = await this.shoppingCartRepository.deleteCart(cart.id);

    return deleted;
  }
}

export { ShoppingCartService };

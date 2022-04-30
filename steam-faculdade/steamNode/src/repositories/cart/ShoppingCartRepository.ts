import { Carrinho } from '@prisma/client';
import { SensitiveString } from 'aws-sdk/clients/ecs';
import { prismaCliente } from '../../infra/prismCliente';
import { ErrorHandler } from '../../utils';
import { CartResponse } from '../../utils/enum/cart-enums';
import { IShoppingCartRepository } from '../interface/IShoppingCartRepository';

type IaddOrCreateNewCartResponse = {
  msg: string;
  cart: Carrinho;
};

type ICreatePropsCart = {
  userId: string;
  jogos: SensitiveString[];
  total: string;
};

class ShoppingCartRepository implements IShoppingCartRepository {
  async updateCart(cartId: string, total: string): Promise<void> {
    try {
      await prismaCliente.carrinho.update({
        where: { id: cartId },
        data: {
          total,
        },
      });
    } catch (error) {
      throw new ErrorHandler('Internal Server Error', 500);
    }
  }

  async addItem({
    id,
    jogos,
    total,
  }: Carrinho): Promise<IaddOrCreateNewCartResponse> {
    const updatedCartItens = await prismaCliente.carrinho.update({
      where: {
        id,
      },
      data: {
        total,
        jogos,
      },
    });

    const updatedCartWithNewItem = {
      msg: CartResponse.NEW_ITEM_MSG,
      cart: updatedCartItens,
    };

    return updatedCartWithNewItem;
  }

  async createCart({
    jogos,
    total,
    userId,
  }: Required<ICreatePropsCart>): Promise<any> {
    try {
      const {
        id,
        createdAt,
        userId: user,
        total: totalToPay,
      } = await prismaCliente.carrinho.create({
        data: {
          userId,
          jogos,
          total,
        },
      });

      const { cart, msg } = {
        msg: CartResponse.NEW_CART_MSG,
        cart: {
          id,
          user,
          totalToPay,
          createdAt,
        },
      };

      return { msg, cart };
    } catch (error) {
      throw new ErrorHandler('Internal Server Error', 500);
    } finally {
      await prismaCliente.$disconnect();
    }
  }

  async findCart(userId: string): Promise<Carrinho | null> {
    try {
      const findCart = await prismaCliente.carrinho.findFirst({
        where: {
          userId,
        },
      });

      return findCart;
    } catch (error) {
      throw new ErrorHandler('Internal Server Error', 500);
    } finally {
      await prismaCliente.$disconnect();
    }
  }

  async removeItem({ id, userId, jogos }: Carrinho): Promise<any> {
    try {
      const updateRemovedItem = await prismaCliente.carrinho.update({
        where: {
          id,
        },
        data: {
          userId,
          jogos,
        },
      });

      return updateRemovedItem;
    } catch (error) {
      throw new ErrorHandler('Internal Server Error', 500);
    } finally {
      await prismaCliente.$disconnect();
    }
  }

  async deleteCart(cartId: string): Promise<any> {
    try {
      const deleteCart = await prismaCliente.carrinho.delete({
        where: {
          id: cartId,
        },
      });

      return deleteCart;
    } catch (error) {
      throw new ErrorHandler('Internal Server Error', 500);
    } finally {
      await prismaCliente.$disconnect();
    }
  }
}

export { ShoppingCartRepository };

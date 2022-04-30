import { Carrinho } from '@prisma/client';

type IaddOrCreateNewCartResponse = {
  msg: string;
  cart: Carrinho;
};

interface IShoppingCartRepository {
  updateCart: (userId: string, total: string) => Promise<void>;
  addItem: (cart: Carrinho) => Promise<IaddOrCreateNewCartResponse>;
  createCart: (cart: Carrinho) => Promise<IaddOrCreateNewCartResponse>;
  findCart: (userId: string) => Promise<Carrinho | null>;
  removeItem: (cart: Carrinho) => Promise<any>;
  deleteCart: (cartId: string) => Promise<any>;
}

export { IShoppingCartRepository };

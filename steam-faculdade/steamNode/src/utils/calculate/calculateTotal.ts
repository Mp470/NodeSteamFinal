import { Jogos } from '@prisma/client';

const totalToPay = function calculateCartItem(jogos: Jogos[]) {
  const itensPrice = jogos.map((jogo) => jogo.preco);

  const total = String(
    itensPrice.reduce((prevPrice, currentPrice) => prevPrice + currentPrice)
  );

  return total;
};

export { totalToPay };

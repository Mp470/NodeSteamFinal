import { Loja } from '@prisma/client';
import { GamesRepository } from '../../repositories/games/GamesRepository';
import { StoreRepository } from '../../repositories/store/StoreRepository';
import { weekPriceDiscount } from '../../utils/calculate/calculateWeekDiscout';
import { ErrorHandler } from '../../utils/error/ErrorHandler';

class StoreServie {
  constructor(
    private readonly storeRepository: StoreRepository,
    private gamesRepository: GamesRepository
  ) {}

  async createWeekDeal(data: Loja) {
    const createDeal = await this.storeRepository.create(data);

    return createDeal;
  }

  async getWeekDeals(weekDealId: string) {
    const dealsAvailable = [];

    const weekDeal = await this.storeRepository.getWeekDeal(weekDealId);

    if (weekDeal === null) throw new ErrorHandler('Cart nof found!', 404);

    for (let i = 0; i < weekDeal.destaquesDaSemana.length; i++) {
      const deals = weekDeal.destaquesDaSemana[i];

      const jogos = await this.gamesRepository.getGame(deals);

      const newObj = {
        ...jogos,
        oldPrice: jogos.preco,
        preco: weekPriceDiscount(jogos.preco),
      };

      dealsAvailable.push(newObj);
    }

    const result = {
      ...weekDeal,
      destaquesDaSemana: dealsAvailable,
    };

    return result;
  }

  async deleteWeekDeal(weekDealId: string) {
    const deletedWeek = await this.storeRepository.deleteWeekDeal(weekDealId);

    return deletedWeek;
  }
}
export { StoreServie };

import { Loja } from '@prisma/client';

interface IStoreRepository {
  create: (data: Loja) => Promise<Loja>;
  getWeekDeal: (weekDealId: string) => Promise<Loja | null>;
  deleteWeekDeal: (weekDealId: string) => Promise<any>;
}

export { IStoreRepository };

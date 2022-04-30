import { Loja } from '@prisma/client';
import { prismaCliente } from '../../infra/prismCliente';
import { ErrorHandler } from '../../utils/error/ErrorHandler';
import { IStoreRepository } from '../interface/IStoreRepository';

class StoreRepository implements IStoreRepository {
  async create(data: Loja): Promise<Loja> {
    try {
      const create = await prismaCliente.loja.create({
        data: data,
      });

      return create;
    } catch (error) {
      throw new ErrorHandler('Internal Server Error', 500);
    } finally {
      await prismaCliente.$disconnect();
    }
  }
  async getWeekDeal(weekDealId: string): Promise<Loja | null> {
    try {
      const getWeek = await prismaCliente.loja.findFirst({
        where: {
          id: weekDealId,
        },
      });

      return getWeek;
    } catch (error) {
      throw new ErrorHandler('Internal Server Error', 500);
    } finally {
      await prismaCliente.$disconnect();
    }
  }
  async deleteWeekDeal(weekDealId: string): Promise<any> {
    try {
      await prismaCliente.loja.delete({
        where: {
          id: weekDealId,
        },
      });
    } catch (error) {
      throw new ErrorHandler('Internal Server Error', 500);
    } finally {
      await prismaCliente.$disconnect();
    }
  }
}
export { StoreRepository };

import { Amigos } from '@prisma/client';
import { prismaCliente } from '../../infra/prismCliente';
import { ErrorHandler } from '../../utils';
import { IFriendRepository } from '../interface/IFriendRepository';

class FriendsRepository implements IFriendRepository {
  async create(data: Amigos): Promise<Amigos | []> {
    try {
      const create = await prismaCliente.amigos.create({ data });

      return create;
    } catch (error) {
      console.log(error);

      throw new ErrorHandler('Internal Server Error', 500);
    }
  }

  async getFriend(_id: string): Promise<Amigos | null> {
    try {
      const getFriend = prismaCliente.amigos.findFirst({
        where: {
          id: _id,
        },
      });
      return getFriend;
    } catch (error) {
      throw new ErrorHandler('Internal Server Error', 500);
    }
  }

  async listFriends(): Promise<Amigos[] | []> {
    try {
      const listFriends = prismaCliente.amigos.findMany();

      return listFriends;
    } catch (error) {
      throw new ErrorHandler('Internal Server Error', 500);
    }
  }
}

export { FriendsRepository };

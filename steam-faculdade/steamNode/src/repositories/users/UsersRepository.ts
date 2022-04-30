import { Usuario } from '@prisma/client';
import { prismaCliente } from '../../infra/prismCliente';
import { ErrorHandler } from '../../utils';
import { IUsersRepository } from '../interface/IUsersRepository';

class UsersRepository implements IUsersRepository {
  async create({
    amigos,
    jogosComprados,
    nome,
    id,
  }: Usuario): Promise<Usuario> {
    try {
      const creatUser = await prismaCliente.usuario.create({
        data: {
          amigos,
          jogosComprados,
          nome,
          id,
        },
      });

      return creatUser;
    } catch (error) {
      throw new ErrorHandler('Internal Server Error', 500);
    } finally {
      await prismaCliente.$disconnect();
    }
  }

  async getUser(userId: string): Promise<Usuario | null> {
    try {
      const getUser = await prismaCliente.usuario.findFirst({
        where: {
          id: userId,
        },
      });

      return getUser;
    } catch (error) {
      throw new ErrorHandler('Internal Server Error', 500);
    } finally {
      await prismaCliente.$disconnect();
    }
  }

  async listUsers(): Promise<Usuario[]> {
    try {
      const listUsers = await prismaCliente.usuario.findMany();

      return listUsers;
    } catch (error) {
      throw new ErrorHandler('Internal Server Error', 500);
    } finally {
      await prismaCliente.$disconnect();
    }
  }

  async deleteUser(userId: string): Promise<any> {
    try {
      await prismaCliente.usuario.delete({
        where: {
          id: userId,
        },
      });
    } catch (error) {
      throw new ErrorHandler('Internal Server Error', 500);
    } finally {
      await prismaCliente.$disconnect();
    }
  }
}

export { UsersRepository };

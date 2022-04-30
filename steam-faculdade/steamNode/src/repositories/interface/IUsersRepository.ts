import { Usuario } from '@prisma/client';

interface IUsersRepository {
  create: (data: Usuario) => Promise<Usuario>;
  getUser: (userId: string) => Promise<Usuario | null>;
  listUsers: () => Promise<Usuario[]>;
  deleteUser: (userId: string) => Promise<any>;
}

export { IUsersRepository };

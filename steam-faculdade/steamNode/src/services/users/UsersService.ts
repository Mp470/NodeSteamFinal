import { Usuario } from '@prisma/client';
import { UsersRepository } from '../../repositories/users/UsersRepository';
import { ErrorHandler } from '../../utils';

class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async createUser(data: Usuario) {
    const newUser = await this.usersRepository.create(data);

    console.log(newUser);

    return newUser;
  }

  async getUser(userId: string) {
    const getUser = await this.usersRepository.getUser(userId);

    if (getUser === null) throw new ErrorHandler('User not Found!', 404);

    return getUser;
  }

  async listUser() {
    const listUsers = await this.usersRepository.listUsers();

    if (listUsers === []) {
      throw new ErrorHandler('There is not any user created', 404);
    }
    return listUsers;
  }

  async deleteUser(userId: string) {
    const deletedUser = await this.usersRepository.deleteUser(userId);

    return deletedUser;
  }
}

export { UsersService };

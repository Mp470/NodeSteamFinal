import { UsersService } from '../../services/users/UsersService';
import { Request, Response } from 'express';

class UsersController {
  constructor(private readonly usersService: UsersService) {}

  async handleCreateUser(request: Request, response: Response) {
    const data = request.body;

    const createUser = await this.usersService.createUser(data);

    return response.json(createUser);
  }

  async handleGetUser(request: Request, response: Response) {
    const { id } = request.params;

    const user = await this.usersService.getUser(id);

    return response.json(user);
  }

  async handleListUser(request: Request, response: Response) {
    const users = await this.usersService.listUser();

    return response.json(users);
  }

  async handleDeleteUser(request: Request, response: Response) {
    const { id } = request.params;

    return response.json(await this.usersService.deleteUser(id));
  }
}

export { UsersController };

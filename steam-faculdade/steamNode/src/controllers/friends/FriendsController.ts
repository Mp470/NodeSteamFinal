import { Amigos } from '@prisma/client';
import { Request, Response } from 'express';
import { FriendsService } from '../../services/friends/FriendsService';

class FriendsController {
  constructor(private readonly friendsService: FriendsService) {}

  async handleCreateFriend(request: Request, response: Response) {
    const data: Amigos = request.body;

    return response.json(await this.friendsService.create(data));
  }

  async handleGetFriend(request: Request, response: Response) {
    const { id } = request.params;

    return response.json(await this.friendsService.getFriend(id));
  }

  async handleListFriend(request: Request, response: Response) {
    return response.json(await this.friendsService.listFriend());
  }
}
export { FriendsController };

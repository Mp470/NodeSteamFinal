import { Amigos } from '@prisma/client';
import { FriendsRepository } from '../../repositories/friends/FriendsRepository';
import { ErrorHandler } from '../../utils';

interface IResponse {
  status: number;
  data: Amigos | any;
}

class FriendsService {
  constructor(private readonly friendRepository: FriendsRepository) {}

  async create(data: Amigos): Promise<IResponse> {
    const createFriend = await this.friendRepository.create(data);

    if (createFriend === [])
      throw new ErrorHandler('Error to create a friend', 400);

    const responseResult = {
      status: 201,
      data: createFriend,
    };

    return responseResult;
  }

  async getFriend(_id: string): Promise<IResponse> {
    const getFriend = await this.friendRepository.getFriend(_id);

    if (getFriend === null)
      throw new ErrorHandler('Error to create a friend', 400);

    const responseResult = {
      status: 201,
      data: getFriend,
    };

    return responseResult;
  }

  async listFriend(): Promise<IResponse> {
    const listFriend = await this.friendRepository.listFriends();

    if (listFriend === [])
      throw new ErrorHandler('Error to create a friend', 400);

    const responseResult = {
      status: 201,
      data: listFriend,
    };

    return responseResult;
  }
}

export { FriendsService };

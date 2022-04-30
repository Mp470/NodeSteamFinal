import { Amigos } from '@prisma/client';

interface IFriendRepository {
  create: (data: Amigos) => Promise<Amigos | []>;
  getFriend: (_id: string) => Promise<Amigos | null>;
  listFriends: () => Promise<Amigos[] | []>;
}

export { IFriendRepository };

import { PrismaClient } from '@prisma/client';
import { gamesMock } from '../src/mockData/games';
const prismaClient = new PrismaClient();

async function main() {
  await prismaClient.usuario.create({
    data: {
      id: '6265c722ea1bee14cf15d040',
      nome: 'fiap-teste',
      amigos: ['6265c607ea1bee14cf15d03c', '6265c6caea1bee14cf15d03e'],
      jogosComprados: ['6261beb910cf733df4a6479b', '6261bc5e10cf733df4a64797'],
    },
  });

  for (let game of gamesMock) {
    await prismaClient.jogos.create({
      data: game,
    });
  }
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(() => {
    prismaClient.$disconnect;
  });

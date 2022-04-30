import { PrismaClient } from '@prisma/client';

const prismaCliente = new PrismaClient();

async function main() {
  // Connect the client
  await prismaCliente.$connect();
  // ... you will write your Prisma Client queries here
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prismaCliente.$disconnect();
  });

export { prismaCliente };

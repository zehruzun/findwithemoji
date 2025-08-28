import { PrismaClient } from './generated/prisma';
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prismadb =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ["query"], // istersen kaldırabilirsin
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prismadb;

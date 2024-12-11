import { PrismaClient } from '@prisma/client';

const globalForPrisma = global as unknown as { prisma: PrismaClient };

// Using a default export as recommended for files with a single export
const prisma = globalForPrisma.prisma
  || new PrismaClient({
    log: ['query'], // Logs queries for debugging purposes
  });

// In development, attach Prisma Client to global so it persists across hot reloads
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export default prisma;

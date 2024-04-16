import { PrismaClient } from "@prisma/client";
import {serverEnv} from "@/env/server.env";

const createPrismaClient = () =>
  new PrismaClient({
    log: serverEnv.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  });

const globalForPrisma = globalThis as unknown as {
  prisma: ReturnType<typeof createPrismaClient> | undefined;
};

export const db = globalForPrisma.prisma ?? createPrismaClient();

if (serverEnv.NODE_ENV !== "production") globalForPrisma.prisma = db;

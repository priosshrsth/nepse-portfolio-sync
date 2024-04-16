import { IServerEnvSchema } from "@/env/env.schema";

export const serverEnv = {
  DATABASE_URL: process.env.DATABASE_URL,
  NODE_ENV: process.env.NODE_ENV,
  NEXT_AUTH_SECRET: process.env.NEXTAUTH_SECRET,
  NEXT_AUTH_URL: process.env.NEXTAUTH_URL,
} as IServerEnvSchema
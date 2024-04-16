import type { IPublicEnvSchema } from "@/env/env.schema";

export const publicEnv = {
  APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,
} as IPublicEnvSchema;

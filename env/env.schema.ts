import { z } from "zod";

export const publicEnvSchema = z.object({
  APP_NAME: z.string(),
});

export type IPublicEnvSchema = z.output<typeof publicEnvSchema>;

export const serverEnvSchema = z.object({
  DATABASE_URL: z
    .string()
    .url()
    .refine((str) => !str.includes("YOUR_MYSQL_URL_HERE"), "You forgot to change the default URL"),
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  NEXT_AUTH_SECRET: process.env.NODE_ENV === "production" ? z.string() : z.string().optional(),
  NEXT_AUTH_URL: z.preprocess(
    // This makes Vercel deployments not fail if you don't set NEXTAUTH_URL
    // Since NextAuth.js automatically uses the VERCEL_URL if present.
    (str) => process.env.VERCEL_URL ?? str,
    // VERCEL_URL doesn't include `https` so it cant be validated as a URL
    process.env.VERCEL ? z.string() : z.string().url(),
  ),
});

export type IServerEnvSchema = z.output<typeof serverEnvSchema>;

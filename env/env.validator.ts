import { publicEnvSchema, serverEnvSchema } from "@/env/env.schema";
import { publicEnv } from "./public.env";
import { serverEnv } from "./server.env";

import { logError } from "server/console.mjs";
import { ZodFormattedError, ZodSchema } from "zod";

export const formatErrors = (errors: ZodFormattedError<Map<string, string>, string>, isServer = false) => {
  return Object.entries(errors).flatMap(([name, value]) => {
    if (value && "_errors" in value) {
      const fieldName = `${isServer ? "" : "NEXT_PUBLIC_"}${name}`;
      return [`${fieldName}: ${value._errors.join(", ")}\n`];
    }

    return [];
  });
};

export function validateEnv() {
  const validate = (schema: ZodSchema<unknown>, env: Object, isServer: boolean) => {
    const res = schema.safeParse(env);
    if (!res.success) {
      const errors = formatErrors(res.error.format(), isServer);
      logError(`❌ Invalid ${isServer ? "server" : "client"} side environment variables:\n`, ...errors);
      throw new Error(`Invalid ${isServer ? "server" : "client"} side environment variables`, {
        cause: errors[0],
      });
    }
  };

  validate(publicEnvSchema, publicEnv, false);

  if (!process.browser) {
    validate(serverEnvSchema, serverEnv, true);
  }
}

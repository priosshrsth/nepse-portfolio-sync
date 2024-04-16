import { publicEnvSchema, serverEnvSchema } from "@/env/env.schema";
import { publicEnv } from "./public.env";
import { serverEnv } from "./server.env";

import { logError } from "server/console";
import type { ZodFormattedError, ZodSchema } from "zod";

export const formatErrors = (errors: ZodFormattedError<Map<string, string>, string>, isServer = false) => {
  return Object.entries(errors).reduce(
    (errorObject, [name, value]) => {
      if (value && "_errors" in value) {
        const fieldName = `${isServer ? "" : "NEXT_PUBLIC_"}${name}`;
        errorObject[fieldName] = value._errors;
      }
      return errorObject;
    },
    {} as Record<string, string[]>,
  );
};

export function validateEnv() {
  const validate = (schema: ZodSchema<unknown>, env: object, isServer: boolean) => {
    const res = schema.safeParse(env);
    if (!res.success) {
      const errors = formatErrors(res.error.format(), isServer);
      logError(`❌ Invalid ${isServer ? "server" : "client"} side environment variables:\n`, errors);
      const error = new Error(`Invalid ${isServer ? "server" : "client"} side environment variables`);
      // @ts-ignore
      error.status = 422;
      // @ts-ignore
      error.errors = errors;
      throw error;
    }
  };

  validate(publicEnvSchema, publicEnv, false);

  if (!process.browser) {
    validate(serverEnvSchema, serverEnv, true);
  }
}

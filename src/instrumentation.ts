import { validateEnv } from "@/env/env.validator";

export function register() {
  validateEnv();
}

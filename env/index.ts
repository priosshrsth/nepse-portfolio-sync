import { publicEnv } from "@/env/public.env";
import { serverEnv } from "@/env/server.env";

export const env = {
  ...publicEnv,
  ...serverEnv,
};

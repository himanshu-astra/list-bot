import { config } from "dotenv";
import { resolve } from "path";
import type { ENV_KEYS } from "../types.js";

const EnvFile = process.env.NODE_ENV === "development" 
  ? ".dev.env" 
  : ".env";

const EnvFilePath = resolve(process.cwd(), EnvFile);

config({ path: EnvFilePath });

export function getEnvVar(name: ENV_KEYS, fallback?: string): string {
  const value = process.env[name] ?? fallback;
  if (value === undefined) {
    throw new Error(`Environment variable ${name} is not set.`);
  }

  return value;
}
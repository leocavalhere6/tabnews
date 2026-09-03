import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
  POSTGRES_HOST: z.string().min(1),
  POSTGRES_PORT: z.coerce.number().default(5432),
  POSTGRES_USER: z.string().min(1),
  POSTGRES_DB: z.string().min(1),
  POSTGRES_PASSWORD: z.string().min(1),
  REDIS_HOST: z.string().min(1).default("localhost"),
  REDIS_PORT: z.coerce.number().default(6379),
});

export const env = envSchema.parse(process.env);

import { z } from "zod";

export const createUserSchema = z.object({
  username: z
    .string()
    .min(1, "Username is required.")
    .min(3, "Username must be at least 3 characters.")
    .max(30, "Username must be at most 30 characters.")
    .regex(
      /^[a-zA-Z0-9_]+$/,
      "Username can only contain letters, numbers, and underscores.",
    ),
  email: z
    .string()
    .min(1, "Email is required.")
    .email("Invalid email format.")
    .max(254),
  password: z
    .string()
    .min(1, "Password is required.")
    .min(8, "Password must be at least 8 characters.")
    .max(72, "Password must be at most 72 characters."),
});

export type CreateUserInput = z.infer<typeof createUserSchema>;

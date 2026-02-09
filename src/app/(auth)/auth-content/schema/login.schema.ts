import { z } from "zod";

export const loginForm = z.object({
  email: z.string().min(5, "Email must be at least 5 characters"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export type LoginSchemaType = z.infer<typeof loginForm>;

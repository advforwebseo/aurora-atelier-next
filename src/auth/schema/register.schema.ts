import { z } from "zod";

export const registerSchema = z.object({
  email: z.string().max(255),
  password: z.string().min(8).max(72),
  social_media: z.string().max(50),
});

export type RegisterDto = z.infer<typeof registerSchema>;

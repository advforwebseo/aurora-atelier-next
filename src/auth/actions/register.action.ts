"use server";

import { z } from "zod";

import prisma from "@/lib/prisma";
import { registerRateLimit } from "@/lib/rate-limit";

import { hashPassword } from "../password";

const registerDtoSchema = z.object({
  email: z.string().max(255),
  password: z.string().min(8).max(72),
  social_media: z.string().max(50),
});

interface RegisterActionData {
  email: string;
  password: string;
  social_media: string;
}

export async function registerUser(data: RegisterActionData) {
  const { success } = await registerRateLimit.limit(data.email.toLowerCase());

  if (!success) {
    return {
      error: "Too many requests",
    };
  }

  const parsed = registerDtoSchema.parse(data);

  const existingUser = await prisma.user.findUnique({
    where: { email: parsed.email.toLowerCase() },
  });

  if (existingUser) {
    return {
      error: "Invalid credentials",
    };
  }
  const passwordHash = await hashPassword(parsed.password);

  await prisma.user.create({
    data: {
      email: parsed.email.toLowerCase(),
      passwordHash,
      social_media: parsed.social_media,
    },
  });

  return {
    success: true,
    message: "Registration successful",
  };
}

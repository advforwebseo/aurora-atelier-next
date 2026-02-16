"use server";

import { z } from "zod";

import prisma from "@/lib/prisma";

import { hashPassword } from "../helpers/password";
import { registerRateLimit } from "../helpers/rate-limit";
import { AuthResponse } from "../types/auth.types";

const registerDtoSchema = z.object({
  email: z.string().max(255),
  password: z.string().min(8).max(72),
  social_media: z.string().max(50),
});

type RegisterActionData = z.infer<typeof registerDtoSchema>;

export async function registerUser(data: RegisterActionData): Promise<AuthResponse> {
  try {
    const { success } = await registerRateLimit.limit(data.email.toLowerCase());

    if (!success) {
      return { success: false, error: "Too many requests" };
    }

    const parsed = registerDtoSchema.safeParse(data);

    if (!parsed.success) {
      return { success: false, error: "Invalid data" };
    }

    const existingUser = await prisma.user.findUnique({
      where: { email: parsed.data.email.toLowerCase() },
    });

    if (existingUser) {
      return { success: false, error: "Invalid credentials" };
    }

    const passwordHash = await hashPassword(parsed.data.password);

    await prisma.user.create({
      data: {
        email: parsed.data.email.toLowerCase(),
        passwordHash,
        social_media: parsed.data.social_media,
      },
    });

    return {
      success: true,
      message: "Registration successful",
    };
  } catch (error) {
    console.error("Registration error:", error);
    return { success: false, error: "An error occurred during registration" };
  }
}

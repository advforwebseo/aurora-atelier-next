import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

import prisma from "@/lib/prisma";

import { verifyPassword } from "./helpers/password";

interface CredentialsInput {
  email?: string;
  password?: string;
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  session: { strategy: "jwt" },

  providers: [
    Credentials({
      credentials: {
        email: { type: "email" },
        password: { type: "password" },
      },

      async authorize(credentials) {
        const { email, password } = credentials as CredentialsInput;

        if (!email || !password) return null;

        const user = await prisma.user.findUnique({
          where: { email },
        });

        if (!user || !user.passwordHash) return null;

        const isValid = await verifyPassword(password, user.passwordHash);
        if (!isValid) return null;

        return {
          id: user.id,
          email: user.email,
        };
      },
    }),
  ],
});

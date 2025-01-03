import NextAuth from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import { prisma } from "../../../../lib/prisma";
import { compare } from "bcrypt";

const handler = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || "",
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) return null;
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });
        if (!user || !user.password) return null;

        // Compare hashed password
        const match = await compare(credentials.password, user.password);
        if (!match) return null;

        return { id: user.id, email: user.email };
      },
    }),
    // Wallet connect placeholder (no standard NextAuth provider).
    // For real usage, integrate your wallet workflow or custom OAuth solution.
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.uid = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token?.uid) {
        session.user.id = token.uid;
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST };
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { createGuest, getGuest } from "./data-service";

const authOptions = {
  // Configure one or more authentication providers
  // debug: true,

  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    // ...add more providers here
  ],
  callbacks: {
    authorized({ auth, request }) {
      console.log("hi from authorized callback");
      return !!auth?.user; //!! will convert any value to boolean
    },
    async signIn({ user, account, profile }) {
      console.log("hi from signIn callback");
      try {
        const existingGuest = await getGuest(user.email);
        if (!existingGuest)
          await createGuest({ email: user.email, fullName: user.name });
        return true;
      } catch {
        return false;
      }
    },
  },
  pages: {
    signIn: "/login",
  },
};

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authOptions);

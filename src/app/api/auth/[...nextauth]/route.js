import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
// import { authOptions } from "../../../../../lib/authOptions";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: "/",
  },
  // Optionally, you can add other NextAuth configuration options here
});

export { handler as GET, handler as POST };

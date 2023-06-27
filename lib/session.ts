import { getServerSession } from "next-auth/next";
import { NextAuthOptions, User } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import jsonwebtoken from "jsonwebtoken";
import { JWT } from "next-auth/jwt";
import { SessionInterface } from "@/common.types";


export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
    // GithubProvider({
    //   clientId: process.env.GITHUB_CLIENT_ID || "",
    //   clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
    // }),
  ],
//   jwt: {
//       encode: ({ secret, token }) => {

//       },
//       decode: async ({ secret, token }) => {

//       }
//   },
  theme: {
      colorScheme: 'light',
      logo: '/logo.png'
  },
  callbacks: {
      async session({ session }) {
          return session
      },
      async signIn({ user }: { user: AdapterUser | User }){//making a differentiation between a google user and user in our db
        try {
            //get the user if they exist

            //if they doesn't exist, create them


            //return true if retun user
            return true
        } catch (error: any) {
            console.log(error);
            return false;
        }
      }
  }
};

//getting user sessions from login sessions
export async function getCurrentUser() {
  const session = await getServerSession(authOptions) as SessionInterface;

  return session;
}
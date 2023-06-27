import NextAuth from "next-auth";

import { authOptions } from "@/lib/session";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };//this will allow us to make get and post request using next-auth
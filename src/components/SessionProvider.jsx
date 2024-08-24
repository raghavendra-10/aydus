"use client"; // Add this directive to indicate that this component should be rendered on the client-side

import React from "react";
import { SessionProvider as NextAuthSessionProvider } from "next-auth/react";

export default function SessionProvider({ children }) {
  return <NextAuthSessionProvider>{children}</NextAuthSessionProvider>;
}

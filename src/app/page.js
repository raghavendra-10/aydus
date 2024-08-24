import GoogleLoginButton from "@/components/googleLoginButton";
import { getServerSession } from "next-auth";
import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  const session = await getServerSession();
  console.log(session);

  // useEffect(() => {
  if (session) {
    redirect("/dashboard");
  }
  // }, []);

  return (
    <main className=" flex items-center min-h-screen flex-col">
      <GoogleLoginButton />
    </main>
  );
};

export default page;

"use client";
import { signIn } from "next-auth/react";
import React from "react";

function GoogleLoginButton() {
  const signInHandler = () => {
    console.log("clicked");
    signIn("google", { callbackUrl: "/dashboard" });
  };
  return <button onClick={signInHandler}>Login with google</button>;
}

export default GoogleLoginButton;

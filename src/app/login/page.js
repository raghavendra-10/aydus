"use client";

import { Button } from "@mui/material";
import React from "react";
import GoogleIcon from "@mui/icons-material/Google";
import { signIn } from "next-auth/react";

function Login() {
  const handleSignIn = async () => {
    try {
      await signIn("google", {
        callbackUrl: "/", // URL to redirect to after sign-in
      });
    } catch (error) {
      console.error("Sign-in error:", error);
    }
  };

  return (
    <Button variant="contained" endIcon={<GoogleIcon />} onClick={handleSignIn}>
      Send
    </Button>
  );
}

export default Login;

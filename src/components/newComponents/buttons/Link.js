import { Button } from "@mui/material";
import React from "react";

const Link = ({ text = "Link" }) => {
  return (
    <Button
      variant="text"
      style={{
        textTransform: "capitalize",
        fontWeight: "bold",
        fontSize: "1rem",
      }}
    >
      {text}
    </Button>
  );
};

export default Link;

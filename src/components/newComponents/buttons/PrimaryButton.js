import { Button } from "@mui/material";
import React from "react";

const PrimaryButton = ({ text = "Click", handleClick = () => {} }) => {
  return (
    <Button variant="contained" onClick={handleClick}>
      {text}
    </Button>
  );
};

export default PrimaryButton;

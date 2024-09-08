import React from "react";

const PrimaryHeader = ({ heading }) => {
  return (
    <h1 class="text-2xl font-bold text-gray-800 my-5 leading-tight">
      {heading}
    </h1>
  );
};

export default PrimaryHeader;

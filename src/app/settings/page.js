import CatalogPage from "@/components/newComponents/Catalog";
import StopLoss from "@/components/newComponents/StopLoss";
import React from "react";

const Page = () => {
  return (
    <div>
      <StopLoss />
      <div className="border-b border-black w-full mx-8"></div>
      <CatalogPage />
    </div>
  );
};

export default Page;

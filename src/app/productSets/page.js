"use client";
import Layout from "@/components/Layout";
import PrimaryButton from "@/components/newComponents/buttons/PrimaryButton";
import PrimaryHeader from "@/components/newComponents/headers/PrimaryHeader";
import ProductSet from "@/components/newComponents/ProductSet";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { useRouter } from "next/navigation";
import React from "react";

const Page = () => {
  const router = useRouter();
  const handleCreate = () => {
    router.push("/productSets/createProductSet");
  };
  return (
    <Layout>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <div className="border-b border-gray-200 pt-5 pb-2 justify-between flex items-center">
          <PrimaryHeader heading="Product Sets" />
          <PrimaryButton text="Create" handleClick={handleCreate} />
        </div>
        {/* <SecondaryHeader heading="Secondary Header" /> */}
        <div className="flex flex-col gap-8 mt-8 pb-8">
          <ProductSet />
          <ProductSet />
        </div>
      </LocalizationProvider>
    </Layout>
  );
};

export default Page;

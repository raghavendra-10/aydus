import React, { useRef } from "react";
import SecondaryHeader from "./headers/SecondaryHeader";
import Link from "./buttons/Link";
import { Paper } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const ProductSet = ({ title = "Product Set1" }) => {
  const scrollableDivRef = useRef(null);

  // Scroll function to handle left/right scroll
  const scroll = (direction) => {
    if (scrollableDivRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollableDivRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const products = [
    {
      productImg:
        "https://cdn.shopify.com/s/files/1/0614/0903/4456/files/compress_1219-sh31-royal-blue__1.jpg?v=1720763249",
      productName: "Men Striped Casual Shirt",
    },
    {
      productImg:
        "https://cdn.shopify.com/s/files/1/0614/0903/4456/files/compress_1219-sh31-royal-blue__1.jpg?v=1720763249",
      productName: "Men Striped Casual Shirt",
    },
    {
      productImg:
        "https://cdn.shopify.com/s/files/1/0614/0903/4456/files/compress_1219-sh31-royal-blue__1.jpg?v=1720763249",
      productName: "Men Striped Casual Shirt",
    },
    {
      productImg:
        "https://cdn.shopify.com/s/files/1/0614/0903/4456/files/compress_1219-sh31-royal-blue__1.jpg?v=1720763249",
      productName: "Men Striped Casual Shirt",
    },
    {
      productImg:
        "https://cdn.shopify.com/s/files/1/0614/0903/4456/files/compress_1219-sh31-royal-blue__1.jpg?v=1720763249",
      productName: "Men Striped Casual Shirt",
    },
    {
      productImg:
        "https://cdn.shopify.com/s/files/1/0614/0903/4456/files/compress_1219-sh31-royal-blue__1.jpg?v=1720763249",
      productName: "Men Striped Casual Shirt",
    },
    {
      productImg:
        "https://cdn.shopify.com/s/files/1/0614/0903/4456/files/compress_1219-sh31-royal-blue__1.jpg?v=1720763249",
      productName: "Men Striped Casual Shirt",
    },
    {
      productImg:
        "https://cdn.shopify.com/s/files/1/0614/0903/4456/files/compress_1219-sh31-royal-blue__1.jpg?v=1720763249",
      productName: "Men Striped Casual Shirt",
    },
    {
      productImg:
        "https://cdn.shopify.com/s/files/1/0614/0903/4456/files/compress_1219-sh31-royal-blue__1.jpg?v=1720763249",
      productName: "Men Striped Casual Shirt",
    },
    {
      productImg:
        "https://cdn.shopify.com/s/files/1/0614/0903/4456/files/compress_1219-sh31-royal-blue__1.jpg?v=1720763249",
      productName: "Men Striped Casual Shirt",
    },
    {
      productImg:
        "https://cdn.shopify.com/s/files/1/0614/0903/4456/files/compress_1219-sh31-royal-blue__1.jpg?v=1720763249",
      productName: "Men Striped Casual Shirt",
    },
    {
      productImg:
        "https://cdn.shopify.com/s/files/1/0614/0903/4456/files/compress_1219-sh31-royal-blue__1.jpg?v=1720763249",
      productName: "Men Striped Casual Shirt",
    },
    {
      productImg:
        "https://cdn.shopify.com/s/files/1/0614/0903/4456/files/compress_1219-sh31-royal-blue__1.jpg?v=1720763249",
      productName: "Men Striped Casual Shirt",
    },
    {
      productImg:
        "https://cdn.shopify.com/s/files/1/0614/0903/4456/files/compress_1219-sh31-royal-blue__1.jpg?v=1720763249",
      productName: "Men Striped Casual Shirt",
    },
    {
      productImg:
        "https://cdn.shopify.com/s/files/1/0614/0903/4456/files/compress_1219-sh31-royal-blue__1.jpg?v=1720763249",
      productName: "Men Striped Casual Shirt",
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-[5px]">
        <SecondaryHeader heading={title} />
        <div className="flex items-center justify-end gap-4">
          <Link text="Edit" />
          <Link text="View Insights" />
        </div>
      </div>

      <Paper elevation={3} className="p-4">
        {/* Scrollable div component */}
        <div className="relative mt-4 flex items-center justify-between">
          {/* Left Arrow */}
          <div
            className="text-black p-2 rounded-full z-10 cursor-pointer"
            onClick={() => scroll("left")}
          >
            <ChevronLeft />
          </div>

          {/* Scrollable div */}
          <div
            ref={scrollableDivRef}
            className="flex overflow-x-scroll scrollbar-hide space-x-4 flex-1 overflow-y-hidden"
          >
            {products.map((item, index) => (
              <div
                className="relative group w-64 h-48 flex-shrink-0"
                key={index}
              >
                <img
                  src={item.productImg}
                  alt="Item 1"
                  className="w-full h-full object-cover rounded-lg"
                />
                {/* Full overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-60 text-white flex items-center justify-center opacity-100 rounded-lg translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  {item.productName}
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            className="text-black p-2 rounded-full z-10 cursor-pointer"
            onClick={() => scroll("right")}
          >
            <ChevronRight />
          </button>
        </div>
      </Paper>
    </div>
  );
};

export default ProductSet;

"use client";
import React from "react";
import Image from "next/image";
import top_cat1 from "@/public/images/Image (4).png";
import top_cat2 from "@/public/images/Image (5).png";
import top_cat3 from "@/public/images/Image (6).png";
import { Inter } from "next/font/google";

const fontInter700 = Inter({ weight: "700", subsets: ["latin"] });

const TopCategories = () => {
  return (
    <div className="py-10 px-6 md:px-10 lg:px-16 bg-gray-50">
      <div className={`${fontInter700.className}`}>
        {/* Heading */}
        <h1 className="text-2xl md:text-4xl font-bold text-[#272343] mb-8">
          Top Categories
        </h1>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {/* Category 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <Image
              src={top_cat1}
              alt="top_cat1"
              width={300}
              height={300}
              className="rounded-lg"
            />
            <h2 className="text-lg md:text-xl font-bold text-[#272343] mt-4">
              Wiring Chair
            </h2>
            <p className="text-sm md:text-base text-gray-600">3,584 Products</p>
          </div>

          {/* Category 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <Image
              src={top_cat2}
              alt="top_cat2"
              width={300}
              height={300}
              className="rounded-lg"
            />
            <h2 className="text-lg md:text-xl font-bold text-[#272343] mt-4">
              Wooden Chair
            </h2>
            <p className="text-sm md:text-base text-gray-600">175 Products</p>
          </div>

          {/* Category 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <Image
              src={top_cat3}
              alt="top_cat3"
              width={300}
              height={300}
              className="rounded-lg"
            />
            <h2 className="text-lg md:text-xl font-bold text-[#272343] mt-4">
              Desk Chair
            </h2>
            <p className="text-sm md:text-base text-gray-600">154 Products</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCategories;

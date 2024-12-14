"use client";
import React from "react";
import Image from "next/image";
import category1 from "@/public/images/item-category 1.png";
import Fea_Prod4 from "@/public/images/fp_4.png";
import Fea_Prod1 from "@/public/images/fp_1.png";
import categ2 from "@/public/images/card (1).png";
import { Roboto } from "next/font/google";

const fontRoboto = Roboto({ weight: "400", subsets: ["latin"] });

const ExploreNewProducts = () => {
  return (
    <div className="py-10 px-6 md:px-10 lg:px-16 bg-gray-50">
      <div className={`${fontRoboto.className}`}>
        {/* Heading */}
        <h1 className="text-[#000000] text-2xl md:text-4xl uppercase font-bold text-center mb-10">
          Explore New and Popular Styles
        </h1>

        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
  {/* Slightly Smaller Large Image */}
  <div className="lg:col-span-2 lg:pr-4">
    <Image
      src={category1}
      alt="Large Featured Image"
      width={500}  
      height={50}
      className="w-full h-auto rounded-lg"
    />
  </div>


          {/* Small Images Grid */}
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={Fea_Prod4}
              alt="Product 4"
              width={200}
              height={200}
              className="w-full h-auto rounded-lg object-cover"
            />
            <Image
              src={Fea_Prod1}
              alt="Product 1"
              width={200}
              height={200}
              className="w-full h-auto rounded-lg object-cover"
            />
            <Image
              src={Fea_Prod1}
              alt="Product 1 (Duplicate)"
              width={200}
              height={200}
              className="w-full h-auto rounded-lg object-cover"
            />
            <Image
              src={categ2}
              alt="Category 2"
              width={200}
              height={200}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreNewProducts;

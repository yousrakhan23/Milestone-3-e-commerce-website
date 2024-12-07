"use client";
import React from "react";
import { Inter } from "next/font/google";

const fontInter = Inter({ weight: "400", subsets: ["latin"] });

const Header = () => {
  return (
    <div>
      <header>
        <div className="bg-[#272343] w-[1592px] h-[45px] justify-between pt-[14px] pr-[300px] pb-[14px] pl-[300px] flex items-center">
          <h1 className={`${fontInter.className} text-[13px] text-[#FFFFFF] flex items-center`}>
            <span className="mr-[16px]">
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.3334 4.5L6.00008 11.8333L2.66675 8.5"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="ml-[4px]">Free Shipping on all orders over $50</span>
          </h1>
        </div>
      </header>
    </div>
  );
};

export default Header;
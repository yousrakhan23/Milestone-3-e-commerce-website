"use client";
import React from "react";
import { Inter } from "next/font/google";

const fontInter400 = Inter({ weight: "400", subsets: ["latin"] });

const Header = () => {
  return (
    <div>
      <header className="bg-[#272343] w-[1592px] h-[45px]">
        <div className=" justify-between pt-[14px] pr-[300px] pb-[14px] pl-[300px] flex items-center">
          <h1
            className={`${fontInter400.className} text-[13px] text-[#FFFFFF] flex items-center`}
          >
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
            <span className="ml-[4px]">
              Free Shipping on all orders over $50
            </span>
          </h1>
          <div>
            <h2
              className={`${fontInter400.className} text-[13px] text-center text-[#FFFFFF] flex items-center justify-center`}
            >
              <span className="mr-[2px]">Eng</span>
              <span className="self-start">
                <svg
                  width="9"
                  height="5"
                  viewBox="0 0 9 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-[7px]"
                >
                  <path
                    d="M8 0.75L4.5 4.25L1 0.75"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <span
                className={`${fontInter400.className} ml-[25px] text-[13px]`}
              >
                Faqs
              </span>
              <span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-[25px] mr-2"
                  
                >
                  <g opacity="0.7" clip-path="url(#clip0_1_883)">
                    <path
                      d="M7.99992 14.6667C11.6818 14.6667 14.6666 11.6819 14.6666 8.00004C14.6666 4.31814 11.6818 1.33337 7.99992 1.33337C4.31802 1.33337 1.33325 4.31814 1.33325 8.00004C1.33325 11.6819 4.31802 14.6667 7.99992 14.6667Z"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8 5.33337V8.00004"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8 10.6666H8.00615"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_883">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span> Need Help
            </h2>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;

"use client";
import React from "react";
import Link from "next/link";
import { Inter } from "next/font/google";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,

  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const fontInter400 = Inter({ weight: "400", subsets: ["latin"] });

const Header = () => {
  return (
    <div>
      <header className="bg-[#272343] w-full">
        <div className="flex items-center justify-between px-4 py-3 md:py-[14px] md:px-[300px]">
          {/* Left Section */}
          <h1
            className={`${fontInter400.className} text-[12px] text-[#FFFFFF] flex items-center sm:text-[11px] md:text-[13px]`}
          >
            <span className="mr-[10px]">
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

          {/* Right Section */}
          <div className="flex items-center space-x-4 sm:space-x-2">
            {/* Language Dropdown */}
            <div className="flex items-center text-[#FFFFFF] text-[12px] sm:text-[11px] md:text-[14px]">
              {/* <span className="mr-[2px]">Eng</span> */}
              <DropdownMenu>
                <DropdownMenuTrigger className="mr-[2px]">Eng</DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>French</DropdownMenuItem>
                  <DropdownMenuItem>Spanish</DropdownMenuItem>
                  <DropdownMenuItem>Chineese</DropdownMenuItem>
                  <DropdownMenuItem>Arabic</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>

            {/* FAQs */}
            <Link href="/Faqs">
              <span
                className={`${fontInter400.className} text-[#FFFFFF] text-[12px] sm:text-[11px] md:text-[13px] cursor-pointer`}
              >
                Faqs
              </span>
            </Link>

            {/* Need Help */}
            <div className="flex items-center text-[#FFFFFF] text-[12px] sm:text-[11px] md:text-[13px]">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2"
              >
                <g opacity="0.7" clipPath="url(#clip0_1_883)">
                  <path
                    d="M7.99992 14.6667C11.6818 14.6667 14.6666 11.6819 14.6666 8.00004C14.6666 4.31814 11.6818 1.33337 7.99992 1.33337C4.31802 1.33337 1.33325 4.31814 1.33325 8.00004C1.33325 11.6819 4.31802 14.6667 7.99992 14.6667Z"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 5.33337V8.00004"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 10.6666H8.00615"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_883">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              Need Help
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;

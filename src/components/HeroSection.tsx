"use client";
import React from "react";
import Image from "next/image";
import hero_section from "@/public/images/herosectionImg.png";
import { Inter } from "next/font/google";
import hero_logo1 from "@/public/images/heroLogo1.png";
import hero_logo2 from "@/public/images/heroLogo2.png";
import hero_logo3 from "@/public/images/heroLogo3.png";
import hero_logo4 from "@/public/images/heroLogo4.png";
import hero_logo5 from "@/public/images/heroLogo5.png";
import hero_logo6 from "@/public/images/heroLogo6.png";
import hero_logo7 from "@/public/images/heroLogo7.png";

const fontInter400 = Inter({ weight: "400", subsets: ["latin"] });
const fontInter700 = Inter({ weight: "700", subsets: ["latin"] });

const HeroSection = () => {
  return (
    <div>
      <div className=" h-[550px] bg-[#F0F2F3] justify-center">
        <div className=" top-[229px] left-[70px]">
          <p
            className={`${fontInter400} uppercase text-[#272343] text-[14px] ml-[25rem] `}
          >
            Welcome to chairy
          </p>
          <h1
            className={`${fontInter700.className} text-[#272343] text-[60px] w-[557px] h-[198px] top-[267px] left-[70px] mx-[24rem]`}
          >
            Best Furniture Collection For Your Interior.
          </h1>
          <div className="w-[171px] h-[52px] pt-[6rem] ml-[24rem]">
            <button
              className={`${fontInter400.className} text-[#FFFFFF] bg-[#029FAE] w-[171px] h-[52px] rounded-[8px] `}
            >
              Shop Now {"->"}
            </button>
          </div>
        </div>
        <div>
          <Image
            src={hero_section}
            alt="hero_section"
            width={360}
            height={574}
            className="absolute top-[290px] right-0 left-[1100px]"
          />
        </div>
      </div>
      <div className="bg-white py-6 px-4">
        <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between gap-4 sm:gap-6 lg:gap-8">
          <Image
            src={hero_logo1}
            alt="hero_logo1"
            width={85}
            height={87}
            className=" sm:h-19"
          />
          <Image
            src={hero_logo2}
            alt="hero_logo2"
            width={107}
            height={109}
            className=" sm:h-19 "
          />
          <Image
            src={hero_logo3}
            alt="hero_logo3"
            width={135}
            height={139}
            className=" sm:h-19"
          />
          <Image
            src={hero_logo4}
            alt="hero_logo4"
            width={63}
            height={65}
            className="sm:h-19"
          />
          <Image
            src={hero_logo5}
            alt="hero_logo5"
            width={98}
            height={101}
            className=" sm:h-19"
          />
          <Image
            src={hero_logo6}
            alt="hero_logo6"
            width={113}
            height={115}
            className=" sm:h-19 "
          />
          <Image
            src={hero_logo7}
            alt="hero_logo1"
            width={84}
            height={87}
            className=" sm:h-19"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

"use client";
import React from "react";
import { Inter } from "next/font/google";
import Image from "next/image";
import about_img from "@/public/images/Image Block.png";

const fontInter700 = Inter({ weight: "700", subsets: ["latin"] });
const fontInter400 = Inter({ weight: "400", subsets: ["latin"] });
const fontInter600 = Inter({ weight: "600", subsets: ["latin"] });

const About = () => {
  return (
    <section className="px-6 sm:px-12 lg:px-20">
      {/* About Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
        {/* Text Section */}
        <div className="bg-[#007580] text-white p-8 rounded-lg lg:max-w-lg">
          <h1
            className={`${fontInter700.className} text-2xl md:text-3xl`}
          >
            About Us - Comforty
          </h1>
          <p
            className={`${fontInter400.className} text-base md:text-lg mt-6`}
          >
            At Comforty, we believe that the right chair can transform your
            space and elevate your comfort. Specializing in ergonomic design,
            premium materials, and modern aesthetics, we craft chairs that
            seamlessly blend style with functionality.
          </p>
          <button className="mt-8 bg-[#029FAE] hover:bg-[#026d7d] text-white text-sm md:text-base py-3 px-6 rounded-lg">
            View Collection
          </button>
        </div>
        {/* Image Section */}
        <Image
          src={about_img}
          alt="About Us Image"
          className="w-full lg:w-auto rounded-lg"
        />
      </div>

      {/* Differentiators Section */}
      <div className="mt-16 text-center">
        <h2
          className={`${fontInter600.className} text-2xl md:text-3xl text-[#272343]`}
        >
          What Makes Our Brand Different
        </h2>
        <div className="grid gap-8 mt-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="bg-[#F9F9F9] p-6 rounded-lg text-center shadow-sm">
            <svg
              className="mx-auto mb-4"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="#007580"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* SVG content */}
            </svg>
            <h3 className="text-[#007580] text-lg font-semibold mb-2">
              Next day as standard
            </h3>
            <p className="text-[#007580] text-sm">
              Order before 3pm and get your order the next day as standard.
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-[#F9F9F9] p-6 rounded-lg text-center shadow-sm">
            <svg
              className="mx-auto mb-4"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="#007580"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* SVG content */}
            </svg>
            <h3 className="text-[#007580] text-lg font-semibold mb-2">
              Made by true artisans
            </h3>
            <p className="text-[#007580] text-sm">
              Handmade crafted goods made with real passion and craftsmanship.
            </p>
          </div>
          <div className="bg-[#F9F9F9] p-6 rounded-lg text-center shadow-sm">
            <svg
              className="mx-auto mb-4"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="#007580"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* SVG content */}
            </svg>
            <h3 className="text-[#007580] text-lg font-semibold mb-2">
            Unbeatable prices
            </h3>
            <p className="text-[#007580] text-sm">
            For our materials and <br /> quality you wont find better <br />{" "}
            prices anywhere.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;

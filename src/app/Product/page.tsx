"use client";
import React from "react";
import Image from "next/image";
import img1 from "@/public/images/fp_1.png";
import img2 from "@/public/images/fp_2.png";
import img3 from "@/public/images/fp_3.png";
import img4 from "@/public/images/fp_4.png";
import img5 from "@/public/images/fp_1.png";
import img6 from "@/public/images/fp_2.png";
import img7 from "@/public/images/fp_3.png";
import img8 from "@/public/images/fp_4.png";
import img9 from "@/public/images/fp_1.png";
import img10 from "@/public/images/fp_2.png";
import img11 from "@/public/images/fp_3.png";
import img12 from "@/public/images/fp_4.png";
import cart from "@/public/images/Add Cart.png";
import NewsLetter from "@/components/NewsLetter";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];

const Page = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-4">
      {/* Gallery Section */}
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center my-8">Our Product Gallery</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-4 hover:scale-105 transform transition-all duration-300"
            >
              {/* Image */}
              <Image
                src={image}
                alt={`Product ${index + 1}`}
                width={300}
                height={300}
                className="w-full h-auto rounded-md object-cover"
              />
              {/* Product Title and Price */}
              <h2 className="text-[#007580] text-lg mt-3">Library Stool Chair</h2>
              <p className="text-xl font-bold mt-2">$20</p>
              {/* Cart Icon */}
              <Image
                src={cart}
                alt="cart"
                width={44}
                height={44}
                className="mt-4 cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gray-100 mt-12 p-8">
        <div className="container mx-auto">
          <NewsLetter />
        </div>
      </div>
    </div>
  );
};

export default Page;

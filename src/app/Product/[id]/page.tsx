"use client";
import React from "react";
import Image from "next/image";
import NewsLetter from "@/components/NewsLetter";

const products = [
  { id: 1, image: "../../public/images/fp_1.png", title: "Library Stool Chair", price: "$20", badge: "New" },
  { id: 2, image: "/images/fp_1.png", title: "Library Stool Chair", price: "$20", badge: "Sale" },
  { id: 3, image:"/images/fp_1.png", title: "Library Stool Chair", price: "$20" },
  { id: 4, image: "../../images/fp_1.png", title: "Library Stool Chair", price: "$20" },
  { id: 5, image: "../../images/fp_1.png", title: "Library Stool Chair", price: "$20" },
  { id: 6, image: "../../images/fp_1.png", title: "Library Stool Chair", price: "$20" },
  { id: 7, image: "../../images/fp_1.png", title: "Library Stool Chair", price: "$20" },
  { id: 8, image: "../../images/fp_1.png", title: "Library Stool Chair", price: "$20" },
  { id: 9, image: "../../images/fp_1.png", title: "Library Stool Chair", price: "$20" },
  { id: 10, image:"../../images/fp_1.png", title: "Library Stool Chair", price: "$20" },
  { id: 11, image: "../../images/fp_1.png", title: "Library Stool Chair", price: "$20" },
  { id: 12, image: "../../images/fp_1.png", title: "Library Stool Chair", price: "$20" },

];

const ProductPage = () => {
  return (
    <div>
    <div className="min-h-screen bg-gray-100 py-10">
      <h1 className="text-3xl font-bold text-center mb-8">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md p-4 hover:scale-105 transform transition"
          >
            <div className="relative">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover rounded-md"
              />
              {product.badge && (
                <span
                  className={`absolute top-2 left-2 text-white text-xs px-2 py-1 rounded ${
                    product.badge === "New"
                      ? "bg-green-500"
                      : product.badge === "Sale"
                      ? "bg-orange-500"
                      : "bg-gray-500"
                  }`}
                >
                  {product.badge}
                </span>
              )}
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-medium text-gray-800">
                {product.title}
              </h3>
              <p className="text-sm text-gray-600">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
      
    </div>
    <div>
      <NewsLetter />
    </div>
    </div>
  );
};

export default ProductPage;

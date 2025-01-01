"use client";
import React from "react";
import { sanityClient } from "@/lib/sanityClient";
import HeroSection from "@/components/HeroSection";
import { Item } from "@radix-ui/react-dropdown-menu";

export const getProductsData = async () => {
  const res = await sanityClient.fetch(
    `*[_type=="product"] {
    title,
    description,
    }`
  );
  return res;
};
 interface IProduct{
  title: string;
  description: string;
 }
export default async function HomePage() {
  const data:IProduct[] = await getProductsData();
  
  return (
    <div>
      {data.map((item) => (
        <h1>{item.title}</h1>
      ))}
      <HeroSection />
    </div>
  );
}

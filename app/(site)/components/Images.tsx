"use client";
import ProductMachineType from "@/types/Product";
import React from "react";
import Image from "next/image";
import { builder } from "@/sanity.config";
type props = {
  product: ProductMachineType;
};

export default function Images({ product }: props) {
  return (
    <div className="w-full">
      {product.secImages &&
        product.secImages.map((image, index) => (
          <Image
            key={index}
            src={builder.image(image.asset).url()}
            alt="image"
            width={1050}
            height={550}
            className=""
          />
        ))}
    </div>
  );
}

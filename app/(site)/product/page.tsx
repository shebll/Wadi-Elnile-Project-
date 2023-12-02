import React from "react";
import Products from "../components/ProductsMachinesPage";
import { getProducts } from "@/sanity/sanity-utils";

async function page() {
  const products = await getProducts();
  return (
    <div>
      <Products items={products} />
    </div>
  );
}

export default page;

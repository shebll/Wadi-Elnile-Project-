import React from "react";
import Products from "../components/ProductsMachinesPage";
import { getProducts } from "@/sanity/sanity-utils";

export const dynamic = "force-dynamic";

async function page() {
  const products = await getProducts();
  return (
    <div>
      <Products items={products} name="All Products" />
    </div>
  );
}
export default page;

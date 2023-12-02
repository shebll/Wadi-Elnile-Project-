import React from "react";
import { getMachines } from "@/sanity/sanity-utils";
import Products from "../components/ProductsMachinesPage";

async function page() {
  const products = await getMachines();
  return (
    <div>
      <Products items={products} />
    </div>
  );
}

export default page;

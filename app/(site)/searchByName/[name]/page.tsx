import { getByName } from "@/sanity/sanity-utils";
import React from "react";
import ProductMachinePage from "../../components/ProductMachinePage";
import Products from "../../components/ProductsMachinesPage";
type props = {
  params: { name: string };
};
async function page({ params }: props) {
  const name = decodeURIComponent(params.name);
  const products = await getByName(name);
  console.log();
  return (
    <div>
      <Products items={products} />
    </div>
  );
}

export default page;

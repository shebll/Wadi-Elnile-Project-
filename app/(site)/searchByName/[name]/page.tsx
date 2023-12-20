import { getByName } from "@/sanity/sanity-utils";
import React from "react";
import Products from "../../components/ProductsMachinesPage";
type props = {
  params: { name: string };
};
async function page({ params }: props) {
  const name = decodeURIComponent(params.name);
  const products = await getByName(name);
  return (
    <div>
      <Products items={products} name="search result" />
    </div>
  );
}

export default page;

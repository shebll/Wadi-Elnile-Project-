import React from "react";
import Products from "../components/ProductsMachinesPage";
import ProductMachineType from "@/types/Product";
type props = {
  products: ProductMachineType[];
};
async function page(props: props) {
  const response = await fetch("http://localhost:3000/api/products", {
    cache: "no-cache",
  });
  const products = await response.json();
  console.log(products.products);
  return (
    <div>
      <Products items={props.products} />
    </div>
  );
}
export async function getStaticProps() {
  const response = await fetch("http://localhost:3000/api/products", {
    cache: "no-cache",
  });
  const data = await response.json();

  return {
    props: {
      products: data.products,
    },
  };
}
export default page;

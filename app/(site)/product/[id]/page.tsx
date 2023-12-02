import { getProduct } from "@/sanity/sanity-utils";
import ProductMachinePage from "../../components/ProductMachinePage";

type props = {
  params: { id: string };
};
async function ProductPage({ params }: props) {
  const id = params.id;
  const product = await getProduct(params.id);
  console.log(product.name);
  return <ProductMachinePage product={product} />;
}

export default ProductPage;

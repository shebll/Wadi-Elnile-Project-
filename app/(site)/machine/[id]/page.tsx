import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { getMachine, getProduct } from "@/sanity/sanity-utils";
import Link from "next/link";
import Images from "../../components/Images";
import ProductMachinePage from "../../components/ProductMachinePage";

type props = {
  params: { id: string };
};
async function MachinePage({ params }: props) {
  const id = params.id;
  const product = await getMachine(params.id);
  return <ProductMachinePage product={product} />;
}

export default MachinePage;

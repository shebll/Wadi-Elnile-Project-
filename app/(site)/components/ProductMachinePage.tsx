import Image from "next/image";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import Images from "./Images";
import ProductMachineType from "@/types/Product";
type props = {
  product: ProductMachineType;
};

function ProductMachinePage({ product }: props) {
  return (
    <div className="container max-w-[1000px] mx-auto py-20 px-[10px] flex justify-center flex-col gap-20 pt-[200px]">
      <div className="flex justify-between items-start gap-10 flex-col lg:flex-row">
        <div className="flex gap-6 flex-col">
          <h1 className="text-4xl font-bold">{product.name}</h1>
          <p className="text-lg text-gray-600">{product.description}</p>
          {/* <p>{product.categories[0]}</p> */}
        </div>
        <Image
          src={product.mainImage}
          alt="image"
          width={550}
          height={550}
          className="rounded-2xl shadow-2xl"
        />
      </div>
      {product.url && (
        <div className="flex flex-col gap-4">
          <Link
            href={product.url || "/"}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-700 text-white px-3 py-2 text-center rounded-[30px] flex-1 text-lg font-semibold"
          >
            youtube video
          </Link>
          <hr />
        </div>
      )}

      <div className="flex gap-4 flex-col">
        {product.description && (
          <>
            <h1 className="text-3xl md:text-5xl font-bold uppercase ">
              full description
            </h1>
            <hr />
            <div className="text-lg  py-4 flex flex-col gap-6">
              {product.description}
            </div>
          </>
        )}
      </div>
      <div className="flex gap-4 flex-col">
        {product.content && (
          <>
            <h1 className="text-3xl md:text-5xl font-bold uppercase ">
              Specifications
            </h1>
            <hr />
            <div className="text-lg  py-4 flex flex-col gap-6">
              <PortableText value={product.content} />
            </div>
          </>
        )}
      </div>
      <div className="flex gap-4 flex-col">
        {product.features && (
          <>
            <h1 className="text-3xl md:text-5xl font-bold uppercase ">
              features
            </h1>
            <hr />
            <div className="text-lg  py-4 flex flex-col gap-6 ">
              <PortableText value={product.features} />
            </div>
          </>
        )}
      </div>
      <Images product={product} />
    </div>
  );
}

export default ProductMachinePage;

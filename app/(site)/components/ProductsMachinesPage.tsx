import ProductMachineType from "@/types/Product";
import Image from "next/image";
import Link from "next/link";
type props = {
  items: ProductMachineType[];
  name: string;
};
async function Products({ items, name }: props) {
  return (
    <div className="min-h-screen flex justify-center items-center flex-col gap-6 py-[80px]">
      <h1 className="text-[40px] md:text-[80px] lg:text-[130px] font-bold text-center">
        {name}
      </h1>
      <div className="container mx-auto flex flex-col lg:flex-row justify-center items-stretch gap-8 px-4  flex-wrap">
        {items.map((item) => (
          <div
            key={item._id}
            className="bg-gray-200 rounded-3xl overflow-hidden flex flex-col gap-10 justify-between lg:w-[46%] xl:w-[30%] shadow-2xl"
          >
            <div className="flex justify-center max-h-[200px] overflow-hidden">
              {item.mainImage ? (
                <Image
                  src={item.mainImage}
                  alt="image"
                  width={350}
                  height={150}
                  className=" bg-contain h-fit"
                />
              ) : (
                <></>
              )}
            </div>
            <div className="flex flex-col gap-6 px-5 pb-10 justify-between">
              <div>
                <div className="font-bold text-lg md:text-2xl ">
                  {item.name}
                </div>
                <div className=" text-gray-500">{item.description}</div>
              </div>
              <Link
                href={`/${name.split(" ")[1].toLowerCase().slice(0, -1)}/${
                  item._id
                }`}
                className="btn-more"
              >
                See More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;

import React from "react";
import Image from "next/image";
import Link from "next/link";

function AllProducts() {
  return (
    <section
      id="allProduct"
      className="container mx-auto py-[100px] flex flex-col gap-20 scroll-smooth px-4"
    >
      <div className="">
        <h1 className="text-[40px] md:text-[70px] lg:text-[100px] font-bold text-center">
          All Products and Machines!
        </h1>
        <p className="text-gray-500 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit aliquam
          facere sit dolore odio at dignissimos, vitae alias, sapiente amet
          sapiente?
        </p>
      </div>
      <div className="flex justify-center items-center gap-20 flex-col lg:flex-row">
        <div className="flex flex-col gap-10 rounded-2xl shadow-2xl overflow-hidden">
          <div className="overflow-hidden md:h-[300px]">
            <Image
              src={"/atelier-cover-1920x1080 - new.jpg"}
              alt="image"
              width={590}
              height={150}
              className=""
            />
          </div>
          <div className="flex flex-col gap-6 px-6 pb-8">
            <h2 className="text-2xl font-bold">Products</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
              Recusandae doloremque corrupti blanditiis harum quas alias, minima
            </p>
            <Link
              href={"/product"}
              className="bg-blue-400 w-full rounded-xl text-white font-bold text-center py-4 hover:bg-blue-500 transition-all"
            >
              See More
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-10 rounded-2xl shadow-2xl overflow-hidden">
          <div className="overflow-hidden md:h-[300px]">
            <Image
              src={"/gettyimages-159758712-612x612.jpg"}
              alt="image"
              width={590}
              height={150}
              className=""
            />
          </div>
          <div className="flex flex-col gap-6 px-6 pb-8">
            <h2 className="text-2xl font-bold">Machines</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
              Recusandae doloremque corrupti blanditiis harum quas alias, minima
            </p>
            <Link
              href={"/machine"}
              className="bg-blue-400 w-full rounded-xl text-white font-bold text-center py-4 hover:bg-blue-500 transition-all"
            >
              See More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AllProducts;

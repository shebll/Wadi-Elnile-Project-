"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { LazyMotion, domAnimation, m } from "framer-motion";

function AllProducts() {
  return (
    <div className="bg-gray-100">
      <LazyMotion features={domAnimation}>
        <section
          id="allProduct"
          className="container mx-auto py-[120px] flex flex-col gap-20 px-4"
        >
          <m.div
            initial={{ y: -150 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 50 }}
            className=""
          >
            <h1 className="section-heading text-gray-300">
              Products & Machines
            </h1>
            <p className="text-gray-900 text-center translate-y-[-20px] lg:translate-y-[-60px] md:font-semibold text-xs md:text-base ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              aliquam
            </p>
          </m.div>
          <div className="flex justify-center items-center gap-20 flex-col lg:flex-row">
            <m.div
              initial={{ y: 250 }}
              whileInView={{ y: 0 }}
              transition={{
                duration: 1,
                type: "spring",
                stiffness: 50,
                delay: 0.1,
              }}
              className="flex flex-col gap-10 rounded-2xl shadow-2xl overflow-hidden"
            >
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                  <br />
                  Recusandae doloremque corrupti blanditiis harum quas alias,
                  minima
                </p>
                <Link
                  href={"/product"}
                  className="bg-blue-400 w-full rounded-xl text-white font-bold text-center py-4 hover:bg-blue-500 transition-all"
                >
                  See More
                </Link>
              </div>
            </m.div>
            <m.div
              initial={{ y: 250 }}
              whileInView={{ y: 0 }}
              transition={{
                duration: 1,
                type: "spring",
                stiffness: 50,
                delay: 0.15,
              }}
              className="flex flex-col gap-10 rounded-2xl shadow-2xl overflow-hidden"
            >
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                  <br />
                  Recusandae doloremque corrupti blanditiis harum quas alias,
                  minima
                </p>
                <Link
                  href={"/machine"}
                  className="bg-blue-400 w-full rounded-xl text-white font-bold text-center py-4 hover:bg-blue-500 transition-all"
                >
                  See More
                </Link>
              </div>
            </m.div>
          </div>
        </section>
      </LazyMotion>
    </div>
  );
}

export default AllProducts;

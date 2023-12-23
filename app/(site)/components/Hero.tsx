"use client";
import { LazyMotion, domAnimation, m } from "framer-motion";
import Image from "next/image";

function Hero() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="hero">
        <div className="container mx-auto h-[80vh] flex flex-col-reverse xl:flex-row justify-around items-center px-4 pt-[100px]">
          <div className="flex flex-col gap-5 flex-1">
            <m.h2
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
                type: "spring",
                stiffness: 50,
                delay: 0.7,
              }}
              className="  max-w-xl font-serif text-4xl md:text-6xl ]"
            >
              <span className="underline">Brand Name</span> Lorem ipsum dolor
              sit amet consectetur adipisicing elit.
            </m.h2>
            <m.p
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
                type: "spring",
                stiffness: 50,
                delay: 1,
              }}
              className="text-gray-700"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit doloribus totam natus? Ea velit ipsum laborum
              commodi animi expedita, sequi repellat iste incidunt rem dolorem!
              Quasi voluptates repellat sunt optio?
            </m.p>
          </div>
          <m.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 50,
              delay: 1,
            }}
            className="flex-1 hidden md:block"
          >
            <Image
              src="/wady_logo.png"
              width={800}
              height={400}
              alt="hero section image"
              loading="lazy"
              className="object-contain"
            />
          </m.div>
        </div>
      </div>
    </LazyMotion>
  );
}

export default Hero;

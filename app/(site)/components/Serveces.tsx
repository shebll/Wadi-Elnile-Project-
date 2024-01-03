"use client";
import Image from "next/image";
import React from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";

function Services() {
  return (
    <section id="services" className="container mx-auto min-h-screen ">
      <LazyMotion features={domAnimation}>
        <m.div
          initial={{ y: -150 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 50 }}
          className="row flex flex-col pb-10"
        >
          <h2 className="section-heading text-gray-300">Our Services</h2>
          <p className="text-gray-900 text-center translate-y-[-20px] lg:translate-y-[-60px] md:font-semibold text-xs md:text-base ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
          </p>
        </m.div>
      </LazyMotion>
      <div className="row">
        <div className="column">
          <div className="card">
            <div className="icon-wrapper">
              <Image
                src={"/services-1.png"}
                width={60}
                height={60}
                alt="services"
              />
            </div>
            <h3>Service Heading</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.
            </p>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="icon-wrapper">
              <Image
                src={"/services-2.png"}
                width={60}
                height={60}
                alt="services"
              />
            </div>
            <h3>Service Heading</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.
            </p>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="icon-wrapper">
              <Image
                src={"/services-3.png"}
                width={60}
                height={60}
                alt="services"
              />
            </div>
            <h3>Service Heading</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.
            </p>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="icon-wrapper">
              <Image
                src={"/services-4.png"}
                width={60}
                height={60}
                alt="services"
              />
            </div>
            <h3>Service Heading</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.
            </p>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="icon-wrapper">
              <Image
                src={"/services-5.png"}
                width={60}
                height={60}
                alt="services"
              />
            </div>
            <h3>Service Heading</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.
            </p>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="icon-wrapper">
              <Image
                src={"/services-6.png"}
                width={60}
                height={60}
                alt="services"
              />
            </div>
            <h3>Service Heading</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;

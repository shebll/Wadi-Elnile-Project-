"use client";
import Image from "next/image";
import React from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";

const servicesData = [
  {
    name: "Service Heading",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Quisquam consequatur necessitatibus eaque.",
  },
  {
    name: "Service Heading",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Quisquam consequatur necessitatibus eaque.",
  },
  {
    name: "Service Heading",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Quisquam consequatur necessitatibus eaque.",
  },
  {
    name: "Service Heading",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Quisquam consequatur necessitatibus eaque.",
  },
  {
    name: "Service Heading",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Quisquam consequatur necessitatibus eaque.",
  },
];
function Services() {
  return (
    <section id="services" className="container mx-auto min-h-screen pt-[70px]">
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

        <div className="row">
          {servicesData.map((service, i) => (
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: i * 0.2 + 0.5 }}
              key={i}
              className="column"
            >
              <div className="card">
                <div className="icon-wrapper">
                  <Image
                    src={`/services-${i + 1}.png"`}
                    width={60}
                    height={60}
                    alt="services"
                  />
                </div>
                <h3>{service.name}</h3>
                <p>{service.content}</p>
              </div>
            </m.div>
          ))}
        </div>
      </LazyMotion>
    </section>
  );
}

export default Services;

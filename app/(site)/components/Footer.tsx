import Link from "next/link";
import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4">
      <div className="container mx-auto flex flex-col items-center justify-center gap-10 w-full">
        <div className="flex flex-col md:flex-row  justify-between md:items-center w-[70%] md:w-[80%] gap-10">
          <div className="flex gap-4 flex-col">
            <h1 className="text-2xl font-semibold">Company</h1>
            <div className="flex gap-1 flex-col">
              <a href="#" className="hover:text-gray-300">
                Home
              </a>
              <a href="#" className="hover:text-gray-300">
                Products
              </a>
              <a href="#" className="hover:text-gray-300">
                Services
              </a>
              <a href="#" className="hover:text-gray-300">
                Contact
              </a>
              <a href="#" className="hover:text-gray-300">
                Home
              </a>
              <a href="#" className="hover:text-gray-300">
                Products
              </a>
            </div>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-2xl font-semibold">Discover</h1>
            <div className="flex gap-1 flex-col">
              <a href="#" className="hover:text-gray-300">
                Home
              </a>
              <a href="#" className="hover:text-gray-300">
                Products
              </a>
              <a href="#" className="hover:text-gray-300">
                Services
              </a>
              <a href="#" className="hover:text-gray-300">
                Contact
              </a>
              <a href="#" className="hover:text-gray-300">
                Home
              </a>
              <a href="#" className="hover:text-gray-300">
                Products
              </a>
            </div>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-2xl font-semibold">Get In Touch</h1>
            <div className="flex gap-1 flex-col">
              <div className="text-xl font-medium flex gap-1">
                <Image
                  src={"/phone.png"}
                  alt="contact"
                  width={20}
                  height={20}
                />
                01159292911
              </div>
              <a href="#" className="hover:text-gray-300">
                Home
              </a>
              <a href="#" className="hover:text-gray-300">
                Products
              </a>
              <a href="#" className="hover:text-gray-300">
                Products
              </a>
              <div className="flex gap-3 items-center">
                <a href="#" className="border p-2 rounded-full">
                  <Image
                    src={"/facebook.png"}
                    alt="contact"
                    width={20}
                    height={20}
                  />
                </a>
                <a href="#" className="border p-2 rounded-full">
                  <Image
                    src={"/mail.png"}
                    alt="contact"
                    width={20}
                    height={20}
                  />
                </a>
                <a href="#" className="border p-2 rounded-full">
                  <Image
                    src={"/youtube.png"}
                    alt="contact"
                    width={20}
                    height={20}
                  />
                </a>
                <a href="#" className="border p-2 rounded-full">
                  <Image
                    src={"/linkedIn.png"}
                    alt="contact"
                    width={20}
                    height={20}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import Link from "next/link";
import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-700 text-white py-8 px-4">
      <div className="container mx-auto flex flex-col items-center justify-center gap-10">
        <div className="flex flex-col items-center justify-center gap-2 ">
          <Link href="/">
            <Image
              src="/wady_logo.jpeg"
              alt="logo image"
              loading="lazy"
              width={400}
              height={60}
              className="object-contain rounded-lg "
            ></Image>
          </Link>
          <p className="lg:max-w-[40%] text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, a
            nihil. Quisquam veniam sunt molestiae, facilis eum quidem
            necessitatibus doloribus odit magni maiores at! Repellendus quis ut
            debitis eos? Aliquam.
          </p>
        </div>
        <div className="flex gap-6 text-2xl flex-col md:flex-row">
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
        </div>

        <div className="mb-6">
          <p>Email: info@example.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>

        <p className="text-sm">
          &copy; {new Date().getFullYear()} Your Brand. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

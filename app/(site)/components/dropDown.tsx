"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Search from "./Search";
function DropDown() {
  const [state, setState] = useState(false);
  const handleClick = () => {
    setState(!state);
  };
  return (
    <div className="md:hidden">
      <div className="pr-6" onClick={handleClick}>
        <Image
          src={"/menu.png"}
          width={26}
          height={26}
          alt="menu"
          className=" cursor-pointer"
        />
      </div>
      <nav
        className={`${
          state == true ? "block" : "hidden"
        } inline-flex md:hidden p-4  flex-col items-center justify-between gap-5 absolute top-0 left-0 bg-gray-500 w-full z-[1]`}
      >
        <div onClick={handleClick} className="absolute top-6 right-10 ">
          <Image
            src={"/close.png"}
            width={26}
            height={26}
            alt="menu"
            className=" cursor-pointer"
          />
        </div>
        <ul className="flex items-center flex-col justify-center gap-3">
          <li
            onClick={handleClick}
            className="font-semibold text-2xl hover:text-black text-gray-700 "
          >
            <Link href="/#allProduct">All Products</Link>
          </li>
          <li
            onClick={handleClick}
            className="font-semibold text-2xl hover:text-black text-gray-700"
          >
            <Link href="/#services">Services</Link>
          </li>
          <li
            onClick={handleClick}
            className="font-semibold text-2xl hover:text-black text-gray-700"
          >
            <Link href="/#contact">Contact</Link>
          </li>
        </ul>
        <Search />
        <div className="" onClick={handleClick}>
          <Link href="/">
            <Image
              src="/wady_logo.png"
              alt="logo image"
              loading="lazy"
              width={200}
              height={60}
              className="object-contain "
            ></Image>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default DropDown;

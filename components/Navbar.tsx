"use client";

import { useState, useEffect } from "react";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-violet-600 bg-opacity-70 backdrop-blur-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="flexBetween max-container padding-container z-30 py-5">
        <Link href="/">
          <Image
            src="/trail-logo.svg"
            alt="logo"
            width={74}
            height={29}
            className="invert"
          />
        </Link>

        <ul className="hidden h-full lg:flex gap-12 overflow-hidden">
          {NAV_LINKS.map((item) => (
            <Link
              href={item.href}
              key={item.key}
              className="relative regular-16 text-white flexCenter cursor-pointer pb-1.5 border-0 transition-all group"
            >
              <span className="font-medium opacity-80 transition-opacity group-hover:opacity-100">
                {item.label}
              </span>
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-orange-600 transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </Link>
          ))}
        </ul>

        <div className="lg:flexCenter hidden">
          <Button
            type="button"
            title="Login"
            icon="/user.svg"
            variant="btn-dark-orange"
          />
        </div>

        <Image
          src="menu.svg"
          alt="menu"
          width={32}
          height={32}
          className="inline-block invert cursor-pointer lg:hidden"
        />
      </nav>
    </div>
  );
};

export default Navbar;

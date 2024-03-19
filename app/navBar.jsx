"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

export default function NavBar() {
  let [isOpen, setIsOpen] = useState(false);

  let [clientHeight, setClientHeight] = useState(Number);
  let [titleFontSize, setTitleFontSize] = useState(24);

  const handleScroll = () => {
    setClientHeight(window.scrollY);
    if (clientHeight > 160) {
      setTitleFontSize(19);
    } else {
      setTitleFontSize(24);
    }
    // console.log(clientHeight)
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <nav className="fixed z-20 flex w-screen max-w-[1200px] flex-col rounded-b-lg bg-[#7f6851] p-1  px-4 text-white md:flex-row md:items-center md:justify-between">
      <div className="flex flex-row items-center justify-between">
        <Link
          href="/"
          style={{
            fontSize: `${titleFontSize}px`,
          }}
          className=" text-[24px] transition-all ease-in-out lg:text-[42px]"
        >
          Casa Magic
        </Link>

        <div
          onClick={() => setIsOpen(!isOpen)}
          className="z-10 cursor-pointer text-xl md:hidden"
        >
          {isOpen ? (
            <FontAwesomeIcon icon={faClose} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </div>
      </div>
      {/* Moblie nav */}
      <div
        className={
          "fixed top-0 mx-auto flex h-full w-full bg-[#7f6851] pt-4 transition-all duration-500 ease-in md:hidden " +
          (isOpen ? "left-0" : "left-[-770px]")
        }
      >
        <ul className="flex w-full flex-col gap-8 md:flex-row md:gap-2 ">
          <h4 className="px-8 text-[2.25rem]">Casa Magic</h4>
          <div>
            <li className="duration-400  flex w-full  text-[1.75rem] font-bold uppercase transition-all ease-in-out ">
              <Link
                onClick={() => setIsOpen(!isOpen)}
                href="/"
                className=" block w-full px-8 py-4"
              >
                Home
              </Link>
            </li>
            <li className="duration-400 flex w-full  text-[1.75rem] font-bold uppercase transition-all ease-in-out ">
              <Link
                onClick={() => setIsOpen(!isOpen)}
                href="/#about"
                className=" block w-full px-8 py-4"
              >
                About
              </Link>
            </li>
            <li className="duration-400  flex w-full  text-[1.75rem] font-bold uppercase transition-all ease-in-out ">
              <Link
                onClick={() => setIsOpen(!isOpen)}
                href="/#contact"
                className=" block w-full px-8 py-4"
              >
                Contact
              </Link>
            </li>
            <li className="duration-400  flex w-full text-[1.75rem] font-bold uppercase transition-all ease-in-out ">
              <Link
                onClick={() => setIsOpen(!isOpen)}
                href="/gallery"
                className=" block w-full px-8 py-4"
              >
                Gallery
              </Link>
            </li>
          </div>
        </ul>
      </div>
      {/* Nav */}
      <div className="h-full ">
        <ul className="hidden h-full gap-2 md:flex md:flex-row md:justify-between lg:gap-8  ">
          <li className="duration-600  flex h-full w-full items-center p-2 text-[18px] font-medium uppercase transition-all ease-in ">
            <Link href="/" onClick={() => setTitleFontSize(32)}>
              Home
            </Link>
          </li>
          <li className="duration-400  flex h-full w-full items-center p-2 text-[18px] font-medium uppercase transition-all  ease-in-out ">
            <Link href="/#about" className=" ">
              About
            </Link>
          </li>
          <li className="duration-400  flex h-full w-full items-center p-2 text-[18px] font-medium uppercase transition-all ease-in-out ">
            <Link href="/gallery" className=" ">
              Gallery
            </Link>
          </li>
          <li className="duration-400  flex h-full w-full items-center p-2 text-[18px] font-medium uppercase transition-all ease-in-out ">
            <Link href="/#contact" className=" ">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

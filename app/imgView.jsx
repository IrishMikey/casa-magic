"use client";

import Image from "next/image";
import { useState } from "react";

export default function ImgView() {
  let [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {isOpen ? (
        <div className="absolute left-0 top-0 z-10 flex min-h-[100vh] flex-col items-center justify-center bg-[#25201af0] ">
          <div
            className="h-[35px] w-[35px] cursor-pointer text-white hover:underline"
            onClick={() => setIsOpen(!isOpen)}
          >
            Close
          </div>
          <Image
            src="/gallery/IMG_3.webp"
            alt="Image of casa magic"
            width={4000}
            height={6000}
          />
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

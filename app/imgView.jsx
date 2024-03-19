"use client";

import Image from "next/image";
import { useState } from "react";

export default function ImgView({ photo }) {
  let [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {isOpen ? (
        <div className="absolute left-0 top-0 z-10 flex min-h-[100vh] flex-col items-center justify-center bg-[#25201af0] ">
          <div
            className="h-[35px] w-[35px] cursor-pointer text-white hover:underline"
            onClick={() => setIsOpen(false)}
          >
            Close
          </div>
          <Image
            key={photo.path}
            src={photo.path}
            alt={`Image ${photo}`}
            height={photo.height}
            width={photo.width}
            sizes="350px"
          />
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

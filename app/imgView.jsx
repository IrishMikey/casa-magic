"use client";

import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function ImgView({ photo }) {
  let [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else document.body.style.overflow = 'scroll';
    return () => {};
  }, [isOpen]);

  return (
    <>
      {isOpen ? (
        <div className="fixed left-0 top-0 z-20 flex min-h-[100%] min-w-[100%] overflow-hidden flex-col items-center justify-center bg-[#25201af0] ">
          <div
            className="w-[100%] px-6 pb-2 text-end max-w-[500px] cursor-pointer text-white hover:underline "
            onClick={() => setIsOpen(false)}
          >
            <FontAwesomeIcon icon={faX} size="xl" className="active:scale-90 transition-all hover:scale-105"/>
          </div>
          <Image
            key={photo.path}
            src={photo.path}
            alt={`Image ${photo}`}
            height={photo.height}
            width={photo.width}
            sizes="350px"
            className="lg:max-w-[500px] max-w-[350px] rounded-lg "
          />
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

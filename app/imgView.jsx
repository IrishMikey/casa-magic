"use client";

import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useState, useEffect } from "react";
import ReactPortal from "./components/ReactPortal";

export default function ImgView({ photo, showImg, handleClose }) {
  // let [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showImg]);

  return (
    <ReactPortal wrapperId="react-portal-modal">
      <>
        <div className="fixed left-0 top-0 z-40 flex h-[100vh] w-[100vw] flex-col items-center justify-center overflow-hidden bg-[#25201af0]">
          <div className="w-[100%] max-w-[500px] cursor-pointer px-6 pb-2 text-end text-white hover:underline">
            <FontAwesomeIcon
              icon={faX}
              size="lg"
              className="transition-all hover:scale-105 active:scale-90"
              onClick={() => handleClose}
            />
          </div>
          <Image
            key={photo.path}
            src={photo.path}
            alt={`Image ${photo}`}
            height={photo.height}
            width={photo.width}
            sizes="350px"
            className="max-w-[350px] rounded-lg lg:max-w-[500px]"
          />
        </div>
      </>
    </ReactPortal>
  );
}

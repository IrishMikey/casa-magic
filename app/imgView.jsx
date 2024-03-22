"use client";

import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function ImgView({ photo, imgViewer, setImgViewer }) {
  // let [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (imgViewer) {
      document.body.style.overflow = "hidden";
      console.log("imgViwe state : " + imgViewer);
    } else {
      document.body.style.overflow = "scroll";
      console.log("imgView state : " + imgViewer);
    }
    return () => {};
  }, [imgViewer]);

  return (
    <>
      {imgViewer && (
        <div className="fixed left-0 top-0 z-20 flex min-h-[100%] min-w-[100%] flex-col items-center justify-center overflow-hidden bg-[#25201af0]">
          <div
            className="w-[100%] max-w-[500px] cursor-pointer px-6 pb-2 text-end text-white hover:underline"
            onClick={() => setImgViewer(false)}
          >
            <FontAwesomeIcon
              icon={faX}
              size="lg"
              className="transition-all hover:scale-105 active:scale-90"
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
      )}
    </>
  );
}

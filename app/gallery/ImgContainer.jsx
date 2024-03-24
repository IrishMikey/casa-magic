"use client";
import Image from "next/image";
import ImgView from "../imgView";
import { useState } from "react";

export default function ImgContainer({ photo }) {
  const widthHeightRatio = photo.height / photo.width;
  const galleryHeight = Math.ceil(350 * widthHeightRatio);
  const photoSpans = Math.ceil(galleryHeight / 10) + 1;

  let [showImg, setShowImg] = useState(false);

  return (
    <div
      className="w-[350px] justify-self-center"
      style={{ gridRow: `span ${photoSpans}` }}
    >
      <div className="grid place-content-center">
        <div
          className="group cursor-pointer select-none overflow-hidden rounded-xl transition hover:scale-105 active:scale-100"
          onClick={() => setShowImg(!showImg)}
        >
          <Image
            key={photo.path}
            src={photo.path}
            alt={`Image ${photo}`}
            height={photo.height}
            width={photo.width}
            sizes="350px"
          />
          {showImg && (
            <ImgView
              photo={photo}
              showImg={showImg}
              handleClose={() => setShowImg(!showImg)}
            />
          )}
        </div>
      </div>
    </div>
  );
}

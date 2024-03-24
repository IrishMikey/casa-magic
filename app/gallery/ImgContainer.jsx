"use client";
import Image from "next/image";
import ImgView from "../imgView";
import { useState } from "react";

export default function ImgContainer({ photo }) {
  const widthHeightRatio = photo.height / photo.width;
  const galleryHeight = Math.ceil(350 * widthHeightRatio);
  const photoSpans = Math.ceil(galleryHeight / 10) + 1;

  let [imgGallery, setImgGallery] = useState(false);

  return (
    <div
      className="w-[350px] justify-self-center"
      style={{ gridRow: `span ${photoSpans}` }}
    >
      <div className="grid place-content-center">
        <div
          className="group cursor-pointer overflow-hidden rounded-xl "
          onClick={() => setImgGallery(true)}
        >
          <Image
            key={photo.path}
            src={photo.path}
            alt={`Image ${photo}`}
            height={photo.height}
            width={photo.width}
            sizes="350px"
          />
          {imgGallery ? <ImgView photo={photo} /> : <></>}
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
("use client");

export default function Page() {
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setLightboxIsOpen(true);
  };

  const closeLightbox = () => {
    setLightboxIsOpen(false);
  };

  return (
    <main className="mb-[6.25rem] flex min-h-screen flex-col">
      <section className="mx-4 mt-[4.375rem] flex flex-col gap-4">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold">Our Gallery</h2>
        </div>
        <div className="flex flex-col flex-wrap justify-evenly gap-4 lg:flex-row">
          {imageNames.map((imageName, index) => (
            <div
              key={`${index}_container`}
              className="relative h-[450px] w-full basis-[45vw] cursor-pointer overflow-hidden rounded bg-gray-300 lg:h-[356px] lg:rounded-2xl"
              onClick={() => openLightbox(index)}
            >
              <Image
                key={index}
                src={`/gallery/${imageName}`}
                alt={`Image ${index + 1}`}
                fill="true"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
        <span>
          <Link
            href="/"
            className="text-[#006eff] transition-all hover:text-[1.0625rem] hover:underline"
          >
            Back home
          </Link>
        </span>
      </section>
      {lightboxIsOpen && (
        <Lightbox
          mainSrc={`/gallery/${imageNames[photoIndex]}`}
          nextSrc={`/gallery/${imageNames[(photoIndex + 1) % imageNames.length]}`}
          prevSrc={`/gallery/${imageNames[(photoIndex + imageNames.length - 1) % imageNames.length]}`}
          onCloseRequest={closeLightbox}
          onMovePrevRequest={() =>
            setPhotoIndex(
              (photoIndex + imageNames.length - 1) % imageNames.length,
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % imageNames.length)
          }
        />
      )}
    </main>
  );
}

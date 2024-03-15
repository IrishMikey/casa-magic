import Image from "next/image";

export default function ImgContainer({ photo }) {
  const widthHeightRatio = photo.height / photo.width;
  const galleryHeight = Math.ceil(300 * widthHeightRatio);
  const photoSpans = Math.ceil(galleryHeight / 10) + 1;

  return (
    <div
      className="w-[300px] justify-self-center"
      style={{ gridRow: `span ${photoSpans + 2}` }}
    >
      <div className="grid place-content-center">
        <div className="group overflow-hidden rounded-xl">
          <Image
            key={photo.path}
            src={photo.path}
            alt={`Image ${photo}`}
            height={photo.height}
            width={photo.width}
            sizes="300px"
          />
        </div>
      </div>
    </div>
  );
}

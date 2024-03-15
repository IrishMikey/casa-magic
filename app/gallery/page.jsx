import Link from "next/link";
import imagesData from "../content/imgData.json";
import ImgContainer from "./ImgContainer";

export default function Page() {
  return (
    <main className="mb-[6.25rem] flex min-h-screen flex-col ">
      <section className="mx-4 mt-[4.375rem] flex flex-col gap-4 ">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold">Our Gallery</h2>
        </div>
        <div className="my-3 grid auto-rows-[10px] grid-cols-gallery md:max-w-[900px] lg:max-w-[1200px]">
          {imagesData.images.map((image) => (
            <ImgContainer key={image.path} photo={image}></ImgContainer>
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
    </main>
  );
}

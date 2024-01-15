import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col lg:items-center lg:my-[42px]">
      <div className="flex flex-col gap-16 items-center">
        <h1 className="lg:text-[68px] lg:w-[1235px] leading-[122%]">
          The best holiday rental in Tenerife for a{" "}
          <span className="italic font-light">magical</span> getaway
        </h1>
        <Image
          src="/hero.webp"
          width={1235}
          height={592}
          alt="Image of 'Casa Magic' rental property, its outside area and swimming pool in tenerife"
          className="rounded-[26px] h-[592px] object-cover object-custom-HeroPos"
        ></Image>
      </div>
    </main>
  );
}

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="mx-3 min-h-full flex-col gap-12 lg:mx-auto xl:max-w-[1440px]">
      {/* Hero section */}
      <section
        id="#home"
        className="flex h-[90svh] flex-col items-center justify-evenly gap-6 lg:justify-center"
      >
        <h1 className="text-2xl leading-7 lg:w-[1235px] lg:text-[68px] lg:leading-[120%]">
          The best holiday rental in Tenerife for a
          <span className="font-light italic"> magical </span> getaway
        </h1>
        <Image
          src="/hero.webp"
          width={1235}
          height={592}
          alt="Image of 'Casa Magic' rental property, its outside area and swimming pool in tenerife"
          className="rounded lg:h-[592px] lg:max-w-[1440px] lg:rounded-[1.625rem] lg:object-cover lg:object-custom-HeroPos"
        ></Image>
      </section>
      {/* About section */}
      <section
        id="#about"
        className="flex flex-col gap-10 lg:my-[2.265rem] lg:h-[90svh] lg:gap-12"
      >
        <h2 className="text-xl font-bold lg:text-2xl">
          About the accomidation
        </h2>
        <section className="flex grow flex-col lg:justify-around lg:gap-4">
          <section className="flex flex-col gap-10">
            <div className="flex flex-col gap-2 rounded lg:flex-row lg:justify-between">
              <div className="lg:max-w-[585px] ">
                <span className="lg:text-2xl lg:leading-9">
                  Welcome to Golf del Sur and Casa Magic! This vacational
                  property stands separate from a main villa and features a
                  private entrance, terrace, spacious king bedroom, and a
                  private pool.
                </span>
              </div>
              <div className="h-[155px] rounded bg-gray-400 lg:h-[340px] lg:w-[640] lg:basis-[50%] lg:rounded-2xl">
                f
              </div>
              {/* <Image>

          </Image> */}
            </div>
          </section>

          <section className="flex flex-col justify-around gap-4 rounded-2xl bg-[#f2f2f2] px-4 py-2 text-[#1A2B47] lg:flex-row lg:px-[0px] lg:py-[15px] ">
            <article className="flex flex-col gap-1">
              <h4 className="font-semibold lg:text-xl">Prime location</h4>
              <span className="border-b border-[#a7c0dd] pb-2 lg:w-[373px] lg:border-0 lg:text-lg lg:leading-[165%] ">
                Casa Magic&apos;s location in Golf del Sur puts you close to
                everything you need for a delightful stay. The San Blas
                Commercial Center, with its vibrant selection of bars, cafes,
                restaurants, and a supermarket, is just a stone&apos;s throw
                away.
              </span>
            </article>
            <article className="flex flex-col gap-2">
              <h4 className="font-semibold lg:text-xl">Exclusive amenities</h4>
              <span className="border-b border-[#a7c0dd] pb-2 lg:w-[373px] lg:border-0 lg:text-lg lg:leading-[165%]">
                A stunning pool and terrace area dedicated exclusively for your
                use. Bask in the sun, take refreshing dips, or enjoy al fresco
                dining against the backdrop of Tenerife&apos;s enchanting
                landscape. Additionally, secure parking adds to your
                convenience.
              </span>
            </article>
            <article className="flex flex-col gap-2">
              <h4 className="font-semibold lg:text-xl">Unmatched comfort</h4>
              <span className="lg:w-[373px] lg:text-lg lg:leading-[165%]">
                Our accommodation boasts a beautifully furnished 1-bedroom
                setup, complemented by 2 well-appointed bathrooms. The private
                lounge is a cozy space for relaxation, while the kitchen allows
                you to indulge in your culinary passions.
              </span>
            </article>
          </section>
        </section>
      </section>
      <section className="flex flex-col gap-4 lg:my-[2.625rem] lg:gap-12">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold">Gallery</h2>
          <span>
            <Link
              href="/gallery"
              className="text-[#006eff] transition-all hover:text-[1.0625rem] hover:underline"
            >
              View all
            </Link>
          </span>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col justify-evenly gap-4 lg:flex-row">
            <div className="h-[175px] w-full  rounded bg-gray-300 lg:h-[356px] lg:rounded-2xl">
              1
            </div>
            <div className="h-[175px] w-full rounded bg-gray-300 lg:h-[356px] lg:basis-[90%] lg:rounded-2xl">
              2
            </div>
          </div>
          <div className="flex flex-col justify-evenly gap-4 lg:flex-row">
            <div className="h-[175px] w-full  rounded bg-gray-300 lg:h-[356px] lg:basis-[90%] lg:rounded-2xl">
              3
            </div>
            <div className="h-[175px] w-full  rounded bg-gray-300 lg:h-[356px] lg:rounded-2xl">
              4
            </div>
          </div>
        </div>
      </section>
      {/* Contact section */}

      <section
        id="#contact"
        className="flex  flex-col lg:my-[42px] lg:gap-12"
      ></section>
    </main>
  );
}

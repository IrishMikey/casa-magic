import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col lg:my-[42px]">
      {/* Hero section */}
      <section
        id="#home"
        className="flex flex-col gap-16 items-center h-screen min-h-[100dvh]"
      >
        <h1 className="lg:text-[68px] lg:w-[1235px] leading-[122%]">
          The best holiday rental in Tenerife for a
          <span className="italic font-light">magical</span> getaway
        </h1>
        <Image
          src="/hero.webp"
          width={1235}
          height={592}
          alt="Image of 'Casa Magic' rental property, its outside area and swimming pool in tenerife"
          className="rounded-[26px] h-[592px] object-cover object-custom-HeroPos"
        ></Image>
      </section>
      {/* About section */}
      <section id="#about" className="flex flex-col lg:gap-12 lg:my-[42px]">
        <section className="flex flex-col lg:gap-4">
          <h2 className="font-semibold text-2xl">About the accomidation</h2>
          <div className="flex justify-between">
            <div className="lg:max-w-[585px] ">
              <span className="lg:text-[25px]">
                Welcome to Golf del Sur and Casa Magic! This vacational property
                stands separate from a main villa and features a private
                entrance, terrace, spacious king bedroom, and a private pool.
              </span>
            </div>
            <div className="h-[340px] w-[640] bg-slate-400 rounded-2xl basis-[50%]">
              f
            </div>
            {/* <Image>

          </Image> */}
          </div>
        </section>

        <section className="flex justify-around bg-gray-100 rounded-2xl lg:py-[15px] lg:px-[22px] ">
          <article className="flex flex-col gap-2">
            <h4 className="lg:text-[22px] lg:font-semibold">Prime location</h4>
            <span className="text-lg leading-[165%] lg:w-[400px]">
              Casa Magic&apos;s location in Golf del Sur puts you close to
              everything you need for a delightful stay. The San Blas Commercial
              Center, with its vibrant selection of bars, cafes, restaurants,
              and a supermarket, is just a stone&apos;s throw away.
            </span>
          </article>
          <article className="flex flex-col gap-2">
            <h4 className="lg:text-[22px] lg:font-semibold">
              Exclusive amenities
            </h4>
            <span className="text-lg leading-[165%] lg:w-[400px]">
              A stunning pool and terrace area dedicated exclusively for your
              use. Bask in the sun, take refreshing dips, or enjoy al fresco
              dining against the backdrop of Tenerife&apos;s enchanting
              landscape. Additionally, secure parking adds to your convenience.
            </span>
          </article>
          <article className="flex flex-col gap-2">
            <h4 className="lg:text-[22px] lg:font-semibold">
              Unmatched comfort
            </h4>
            <span className="text-lg leading-[165%] lg:w-[400px]">
              Our accommodation boasts a beautifully furnished 1-bedroom setup,
              complemented by 2 well-appointed bathrooms. The private lounge is
              a cozy space for relaxation, while the kitchen allows you to
              indulge in your culinary passions.
            </span>
          </article>
        </section>
      </section>
      <section className="flex  flex-col lg:gap-12 lg:my-[42px]">
        <div className="flex justify-between">
          <h2 className="font-semibold text-2xl">Gallery</h2>
          <span>
            <Link
              href="/gallery"
              className="text-[#006eff] hover:underline transition-all hover:text-[17px]"
            >
              View all
            </Link>
          </span>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex justify-evenly gap-4">
            <div className="bg-gray-300 w-full h-[356px] rounded-2xl">1</div>
            <div className="bg-gray-300 w-full h-[356px] rounded-2xl basis-[90%]">
              2
            </div>
          </div>
          <div className="flex justify-evenly gap-4">
            <div className="bg-gray-300 w-full h-[356px] rounded-2xl basis-[90%]">
              3
            </div>
            <div className="bg-gray-300 w-full h-[356px] rounded-2xl">4</div>
          </div>
        </div>
      </section>
      {/* Contact section */}

      <section
        id="#contact"
        className="flex  flex-col lg:gap-12 lg:my-[42px]"
      ></section>
    </main>
  );
}

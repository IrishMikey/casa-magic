import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col mb-[6.25rem] ">
      <section className="flex flex-col justify-around flex-1 gap-8 pt-[3.2rem] min-h-[95vh]">
        <h1 className="text-[2.25rem] leading-[122%]  mx-4 ">
          The best holiday rental in Tenerife for a{" "}
          <span className="italic font-light">magical</span> getaway
        </h1>
        <div className="flex justify-end ml-4">
          <Image
            src="/hero.webp"
            width={1235}
            height={592}
            alt="Image of 'Casa Magic' rental property, its outside area and swimming pool in tenerife"
            className="min-h-[375px] object-cover rounded-l-[26px] "
          ></Image>
        </div>
        <div>
          <p className="text-lg text-center mx-4">Golf del Sur, Tenerife</p>
        </div>
      </section>
      <section className="flex flex-col  mt-[3.375rem]  gap-8">
        <h2 className="font-semibold text-xl mx-4">About The Accommodation </h2>
        <div className="flex flex-col gap-8 ">
          <p className="text-lg max-w-[40ch] mx-4">
            Welcome to Golf del Sur and Casa Magic! This vacational property
            stands separate from a main villa and features a private entrance,
            terrace, spacious king bedroom, and a private pool.
          </p>
          <div className="flex justify-end ml-4">
            <Image
              src="/hero.webp"
              width={1235}
              height={592}
              alt="Image of 'Casa Magic' rental property, its outside area and swimming pool in tenerife"
              className="min-h-[275px] min-w-[225px] max-w-[425px] object-cover rounded-l-[26px] "
            ></Image>
          </div>
        </div>
        <div className="flex mt-[2rem] p-4 gap-6 flex-col bg-blue-100 text-blue-950 rounded-2xl shadow ">
          <div className="flex flex-col xl:flex-row gap-2">
            <h3 className="text-xl font-medium">Prime Location</h3>
            <p >
              Casa Magic&apos;s location in Golf del Sur puts you close to
              everything you need for a delightful stay. The San Blas Commercial
              Center, with its vibrant selection of bars, cafes, restaurants,
              and a supermarket, is just a stone&apos;s throw away.
            </p>
          </div>
          <div className="flex flex-col xl:flex-row gap-2">
            <h3 className="text-xl font-medium">Exlcusive Amenities</h3>
            <p>
              A stunning pool and terrace area dedicated exclusively for your
              use. Bask in the sun, take refreshing dips, or enjoy al fresco
              dining under the beautiful Tenerife sky.
            </p>
          </div>
          <div className="flex flex-col xl:flex-row gap-2">
            <h3 className="text-xl font-medium">Unmatched Comfort</h3>
            <p>Our accommodation boasts a beautifully furnished 1-bedroom setup, complemented by 2 well-appointed bathrooms. The private lounge is a cozy space for relaxation, while the kitchen area allows you to enjoy your home cooked favourites.</p>
          </div>
        </div>
      </section>
      <section className="flex flex-col  mt-[3.375rem]  gap-8">
        <h2 className="font-semibold text-xl mx-4">Our Gallery </h2>

      </section>
    </main>
  );
}

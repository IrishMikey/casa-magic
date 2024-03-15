"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleDown,
  faChevronCircleUp,
  faMobilePhone,
  faChevronRight,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main className="mx-auto mb-[6.25rem] flex min-h-screen max-w-full flex-col lg:max-w-[1200px]">
      <section className="flex min-h-[95vh] flex-1 flex-col justify-around gap-8 pt-[3.2rem] md:gap-6 md:pt-[3.8rem] lg:justify-evenly lg:pt-[8rem]">
        <h1 className="mx-4 text-[2.25rem] leading-[122%] md:text-[2.75rem]  lg:max-w-[30ch] ">
          The best holiday rental in Tenerife for a{" "}
          <span className="font-light italic">magical</span> getaway
        </h1>
        <div className="ml-4 flex justify-end lg:mx-4 xl:m-0 xl:mt-4 ">
          <Image
            src="/hero.webp"
            width={1235}
            height={592}
            priority={true}
            alt="Image of 'Casa Magic' rental property, its outside area and swimming pool in tenerife"
            className="min-h-[375px] rounded-l-[26px] object-cover lg:rounded-r-[32px]"
          ></Image>
        </div>
        <div>
          <p className="mx-4 text-center text-gray-500 md:text-[1.5rem]">
            Golf del Sur, Tenerife
          </p>
        </div>
      </section>
      <section
        id="about"
        className="mt-[3.375rem] flex  scroll-m-14  flex-col gap-8"
      >
        <h2 className="mx-4 text-xl font-semibold lg:text-2xl">
          About The Accommodation{" "}
        </h2>
        <div className="flex flex-col justify-between gap-8  lg:flex-row">
          <p className="mx-4 max-w-[40ch] text-lg lg:text-xl lg:leading-8">
            Welcome to Golf del Sur and Casa Magic! This vacational property
            stands separate from a main villa and features a private entrance,
            terrace, spacious king bedroom, and a private pool.
          </p>
          <div className="ml-4 flex justify-end">
            <Image
              src="/gallery/IMG_15.webp"
              width={4000}
              height={6000}
              priority="true"
              alt="Image of 'Casa Magic' rental property, its outside area and swimming pool in tenerife"
              className="max-h-[275px] min-w-[225px] max-w-[550px] rounded-l-[26px] object-cover md:rounded-r-[26px] "
            ></Image>
          </div>
        </div>
        <div className="mt-[2rem] flex min-h-[100vh] flex-col justify-evenly gap-6 rounded-2xl  bg-blue-100 p-4 text-blue-950 shadow lg:h-auto lg:min-h-0 lg:flex-row lg:p-6">
          <div className="flex basis-[33%] flex-col gap-2">
            <h3 className="text-2xl font-medium">Prime Location</h3>
            <p className="">
              Casa Magic&apos;s location in Golf del Sur puts you close to
              everything you need for a delightful stay. The San Blas Commercial
              Center, with its vibrant selection of bars, cafes, restaurants,
              and a supermarket, is just a stone&apos;s throw away.
            </p>
          </div>
          <span className="h-[2px] border border-blue-200 lg:h-auto lg:w-[2px]"></span>
          <div className="flex basis-[33%] flex-col gap-2">
            <h3 className="text-2xl font-medium">Exclusive Amenities</h3>
            <p>
              A stunning pool and terrace area dedicated exclusively for your
              use. Bask in the sun, take refreshing dips, or enjoy al fresco
              dining under the beautiful Tenerife sky.
            </p>
          </div>
          <span className="h-[2px] border border-blue-200 lg:h-auto lg:w-[2px]"></span>
          <div className="flex basis-[33%] flex-col gap-2">
            <h3 className="text-2xl font-medium">Unmatched Comfort</h3>
            <p>
              Our accommodation boasts a beautifully furnished 1-bedroom setup,
              complemented by 2 well-appointed bathrooms. The private lounge is
              a cozy space for relaxation, while the kitchen area allows you to
              enjoy your home cooked favourites.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-4 mt-[3.375rem] flex flex-col gap-4  lg:my-[2.625rem] lg:mt-[5rem] lg:gap-12">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold">Our Gallery</h2>
          <span>
            <Link
              href="/gallery"
              className="text-lg text-[#006eff] transition-all hover:text-[1.45rem] hover:underline lg:text-xl"
            >
              View all <FontAwesomeIcon icon={faChevronRight} />
            </Link>
          </span>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col justify-evenly gap-4 lg:flex-row">
            <div className="relative h-[175px] w-full  overflow-hidden rounded bg-gray-300 lg:h-[356px] lg:rounded-2xl">
              <Image
                src="/gallery/IMG_3.webp"
                alt="Image of casa magic"
                fill="true"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="relative h-[175px] w-full overflow-hidden rounded bg-gray-300 lg:h-[356px] lg:basis-[90%] lg:rounded-2xl">
              <Image
                src="/gallery/IMG_14.webp"
                alt="Image of casa magic"
                fill="true"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col justify-evenly gap-4 lg:flex-row">
            <div className="relative h-[175px] w-full  overflow-hidden rounded bg-gray-300 lg:h-[356px] lg:basis-[90%] lg:rounded-2xl">
              <Image
                src="/gallery/IMG_11.webp"
                alt="Image of casa magic"
                fill="true"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                priority={true}
              />
            </div>
            <div className="relative h-[175px] w-full  overflow-hidden rounded bg-gray-300 lg:h-[356px] lg:rounded-2xl">
              <Image
                src="/gallery/IMG_17.webp"
                alt="Image of casa magic"
                fill="true"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="mx-4 mt-[3.375rem] flex flex-col gap-4 lg:my-[2.625rem] lg:gap-12">
        <h2 className="text-2xl font-bold">Property Overview</h2>
        <div className="flex flex-col gap-4 rounded-2xl bg-white p-4 transition-all">
          <div className="flex flex-col gap-2 border-b-2 pb-2 lg:items-center">
            <h4 className="text-lg font-medium lg:w-full lg:text-xl">
              Amenities
            </h4>
            <ul className="ml-4 flex max-w-[30ch] list-disc flex-col gap-2 text-sm lg:m-0 lg:grid lg:max-w-fit lg:grid-cols-4 lg:gap-4 lg:gap-x-6 lg:text-lg    ">
              <li className="lg:max-w-[15ch]">
                King-sized bed & en suite bathroom
              </li>
              <li className="lg:max-w-[15ch]">Lounge with English TV</li>
              <li>Air conditioning</li>
              <li>Street parking</li>
              <li>Private Access</li>
              <li>Pool clean</li>
              <li>Washing machine</li>
              <li>Fridge / Freezer</li>
              <li>Coffee machine</li>
              <li>Air fryer</li>
              <li>Hob & Microwave</li>
              <li>Wi-Fi</li>
            </ul>
          </div>
          <div className="overflow-hidden transition-all duration-500 ease-in-out">
            <div
              className="flex items-center justify-between"
              onClick={() => setIsOpen(!isOpen)}
            >
              <h4 className="inline-block cursor-pointer text-lg font-medium lg:w-full">
                Rules
              </h4>
              <span className="transition-transform">
                <FontAwesomeIcon
                  icon={isOpen ? faChevronCircleUp : faChevronCircleDown}
                  className="text-blue-400"
                />
              </span>
            </div>
            <div
              className={`${isOpen ? "flex" : "hidden"} transition-all lg:justify-center`}
            >
              <ul className="ml-4 flex max-w-[30ch] list-disc flex-col gap-2 text-sm lg:m-0 lg:grid lg:max-w-fit lg:grid-cols-4 lg:gap-4 lg:gap-x-6 lg:text-[1rem]">
                <li>No pets</li>
                <li>No parties</li>
                <li>No smoking indoors</li>
                <li>No Functions</li>
                <li>No children</li>
                <li className="lg:max-w-[15ch]">
                  Noise restriction applicable to residential area
                </li>
                <li className="lg:max-w-[15ch]">
                  Strictly only the two guests on booking stay overnight
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="mx-4 mt-[3.375rem] flex min-h-[70vh] flex-col gap-4 lg:my-[2.625rem] lg:gap-12"
      >
        <h2 className="text-2xl font-bold">Get in touch</h2>
        <h4 className="">
          Get In Touch for availability and cost, or any inquiries
        </h4>
        <div className="flex h-full flex-1 flex-col items-center justify-center gap-2">
          <div className="flex max-w-[30ch] flex-col gap-6 text-[0.875rem] lg:max-w-fit lg:flex-row">
            <div className="flex items-center justify-center  text-lg font-medium">
              <Link
                href="tel:+34618100493"
                className="flex h-[7rem] w-full items-center gap-2 rounded-md border border-blue-300 bg-blue-100 px-4 py-1 text-blue-950 transition-all active:scale-95 lg:w-auto"
              >
                <FontAwesomeIcon icon={faMobilePhone} size="2xl" />
                <span>Click to Call</span>
              </Link>
            </div>
            <div className="flex items-center justify-center text-lg font-medium text-white">
              <Link
                href="https://wa.me/34618100493?text=Hello,%20I%20was%20checking%20out%20Casa%20Magic%20online%20and%20would%20like%20to%20chat"
                className="flex h-[7rem] w-full items-center gap-2 rounded-md bg-[#25d366] px-4 py-1 transition-all active:scale-95 lg:w-auto"
              >
                <FontAwesomeIcon icon={faWhatsapp} size="2xl" />
                <span>Chat on WhatsApp</span>
              </Link>
            </div>
            <div className="flex items-center justify-center  rounded-md  text-lg font-medium text-white ">
              <Link
                href="mailto:your@email.com"
                className="flex h-[7rem] w-full items-center gap-2 rounded-md bg-red-500 px-4 py-1 transition-all active:scale-95 lg:w-auto"
              >
                <FontAwesomeIcon icon={faEnvelope} size="2xl" />
                <span>Send us an e-mail</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

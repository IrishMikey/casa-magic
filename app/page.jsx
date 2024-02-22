"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleDown, faChevronCircleUp, faMobilePhone } from "@fortawesome/free-solid-svg-icons";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main className="flex min-h-screen flex-col mb-[6.25rem] max-w-[450px] ">
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
          <p className="text-center mx-4 text-gray-500">Golf del Sur, Tenerife</p>
        </div>
      </section>
      <section id="about" className="flex flex-col  mt-[3.375rem]  gap-8 scroll-m-14">
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
        <div className="flex mt-[2rem] p-4 gap-6 flex-col  justify-evenly bg-blue-100 text-blue-950 rounded-2xl shadow h-[100vh]">
          <div className="flex flex-col xl:flex-row gap-2">
            <h3 className="text-2xl font-medium">Prime Location</h3>
            <p >
              Casa Magic&apos;s location in Golf del Sur puts you close to
              everything you need for a delightful stay. The San Blas Commercial
              Center, with its vibrant selection of bars, cafes, restaurants,
              and a supermarket, is just a stone&apos;s throw away.
            </p>
          </div>
          <div className="flex flex-col xl:flex-row gap-2">
            <h3 className="text-2xl font-medium">Exlcusive Amenities</h3>
            <p>
              A stunning pool and terrace area dedicated exclusively for your
              use. Bask in the sun, take refreshing dips, or enjoy al fresco
              dining under the beautiful Tenerife sky.
            </p>
          </div>
          <div className="flex flex-col xl:flex-row gap-2">
            <h3 className="text-2xl font-medium">Unmatched Comfort</h3>
            <p>Our accommodation boasts a beautifully furnished 1-bedroom setup, complemented by 2 well-appointed bathrooms. The private lounge is a cozy space for relaxation, while the kitchen area allows you to enjoy your home cooked favourites.</p>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-4 mt-[3.375rem] lg:my-[2.625rem] lg:gap-12 mx-4">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold">Our Gallery</h2>
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
      <section className="flex flex-col gap-4 mt-[3.375rem] lg:my-[2.625rem] lg:gap-12 mx-4 ">    
        <h2 className="text-2xl font-bold">Property Overview</h2>          
        <div className="bg-white rounded-2xl p-4 flex flex-col gap-4 transition-all">
          <div className="flex flex-col gap-2 border-b-2 pb-2">
            <h4 className="text-lg font-medium">Amenities</h4>
            <ul className="max-w-[30ch] flex flex-col gap-2 text-[0.875rem]">
              <li>King-sized bed & en suite bathroom</li>
              <li>Lounge with English TV</li>
              <li>Wi-Fi</li>
              <li>Air conditioning</li>
              <li>Street parking</li>
              <li>Private Access</li>
              <li>Pool clean</li>
              <li>Washing machine</li>
              <li>Fridge / Freezer</li>
              <li>Coffee machine</li>
              <li>Air fryer</li>
              <li>Hob & Microwave</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
         <div className="flex justify-between"  onClick={() => setIsOpen(!isOpen)}>
         <h4 className="text-lg font-medium cursor-pointer inline-block">Rules</h4>
          <span className="transition-all">{isOpen ? (
            <FontAwesomeIcon icon={faChevronCircleUp} className="text-blue-400"/>
          ) : (
            <FontAwesomeIcon icon={faChevronCircleDown} className="text-blue-400"/>
          )}</span>
         </div>
      {isOpen && (
        <ul className="max-w-[30ch] flex flex-col gap-2 text-[0.875rem] ">
          <li>No pets</li>
          <li>No parties</li>
          <li>No smoking indoors</li>
          <li>No Functions</li>
          <li>No children</li>
          <li>Noise restriction applicable to residential area</li>
          <li>Strictly only the two guests on booking stay overnight</li>
        </ul>
      )}
          </div>
        </div>
       </section>
      {/* Contact Section */}
      <section className="flex flex-col gap-4 mt-[3.375rem] lg:my-[2.625rem] lg:gap-12 mx-4">  
      <h2 className="text-2xl font-bold">Get in touch</h2>          
      <h4 className="">Please feel free to contact us with any enquiries</h4>
      <div className="flex flex-col gap-2">
            <ul className="max-w-[30ch] flex flex-col gap-2 text-[0.875rem]">
              <li className=" bg-white px-2 py-1 rounded-md font-medium text-lg  "><FontAwesomeIcon icon={faMobilePhone} size="2xl"/><a href="tel:+34618100493" className="ml-2">Click to Call</a></li>
              <li className="bg-[#25d366] px-2 py-1 rounded-md font-medium text-lg text-white"> <FontAwesomeIcon icon={faWhatsapp} size="2xl"/> <a className="ml-2" aria-label="Chat on WhatsApp" alt="Chat on WhatsApp" href="https://wa.me/34618100493?text=Hello,%20I%20was%20checking%20out%20Casa%20Magic%20online%20and%20would%20like%20to%20chat">Chat on WhatsApp</a></li>
            </ul>
          </div>
</section>
    </main>
  );
}

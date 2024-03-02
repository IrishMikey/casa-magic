"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleDown, faChevronCircleUp, faMobilePhone, faChevronRight } from "@fortawesome/free-solid-svg-icons";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main className="flex min-h-screen flex-col mb-[6.25rem] max-w-[1200px] mx-auto">
      <section className="flex flex-col justify-around flex-1 gap-8 md:gap-6 lg:justify-evenly pt-[3.2rem] md:pt-[3.8rem] lg:pt-[8rem] min-h-[95vh]">
        <h1 className="text-[2.25rem] md:text-[2.75rem] leading-[122%] lg:max-w-[30ch]  mx-4 ">
          The best holiday rental in Tenerife for a{" "}
          <span className="italic font-light">magical</span> getaway
        </h1>
        <div className="flex justify-end ml-4 lg:mx-4 xl:m-0 xl:mt-4 ">
          <Image
            src="/hero.webp"
            width={1235}
            height={592}
            alt="Image of 'Casa Magic' rental property, its outside area and swimming pool in tenerife"
            className="min-h-[375px] object-cover rounded-l-[26px] lg:rounded-r-[32px] "
          ></Image>
        </div>
        <div>
          <p className="text-center mx-4 text-gray-500 md:text-[1.5rem]">Golf del Sur, Tenerife</p>
        </div>
      </section>
      <section id="about" className="flex flex-col  mt-[3.375rem]  gap-8 scroll-m-14">
        <h2 className="font-semibold text-xl mx-4 lg:text-2xl">About The Accommodation </h2>
        <div className="flex flex-col gap-8 lg:flex-row  justify-between">
          <p className="text-lg max-w-[40ch] mx-4 lg:text-xl lg:leading-8">
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
              className="min-h-[275px] min-w-[225px] max-w-[550px] object-cover rounded-l-[26px] md:rounded-r-[26px] "
            ></Image>
          </div>
        </div>
        <div className="flex mt-[2rem] p-4 gap-6 flex-col lg:flex-row  justify-evenly bg-blue-100 text-blue-950 rounded-2xl shadow h-[100vh] lg:h-auto lg:p-6">
          <div className="flex flex-col gap-2 basis-[33%]">
            <h3 className="text-2xl font-medium">Prime Location</h3>
            <p className="">
              Casa Magic&apos;s location in Golf del Sur puts you close to
              everything you need for a delightful stay. The San Blas Commercial
              Center, with its vibrant selection of bars, cafes, restaurants,
              and a supermarket, is just a stone&apos;s throw away.
            </p>
          </div>
            <span className="border-blue-200 h-[2px] border lg:w-[2px] lg:h-auto"></span>
          <div className="flex flex-col gap-2 basis-[33%]">
            <h3 className="text-2xl font-medium">Exclusive Amenities</h3>
            <p>
              A stunning pool and terrace area dedicated exclusively for your
              use. Bask in the sun, take refreshing dips, or enjoy al fresco
              dining under the beautiful Tenerife sky.
            </p>
          </div>
          <span className="border-blue-200 h-[2px] border lg:w-[2px] lg:h-auto"></span>
          <div className="flex flex-col gap-2 basis-[33%]">
            <h3 className="text-2xl font-medium">Unmatched Comfort</h3>
            <p>Our accommodation boasts a beautifully furnished 1-bedroom setup, complemented by 2 well-appointed bathrooms. The private lounge is a cozy space for relaxation, while the kitchen area allows you to enjoy your home cooked favourites.</p>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-4 mt-[3.375rem] lg:mt-[5rem]  lg:my-[2.625rem] lg:gap-12 mx-4">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold">Our Gallery</h2>
          <span>
            <Link
              href="/gallery"
              className="text-[#006eff] transition-all text-lg lg:text-xl hover:text-[1.45rem] hover:underline"
            >
              View all <FontAwesomeIcon icon={faChevronRight}/>
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
      <section className="flex flex-col gap-4 mt-[3.375rem] lg:my-[2.625rem] lg:gap-12 mx-4">    
  <h2 className="text-2xl font-bold">Property Overview</h2>          
  <div className="bg-white rounded-2xl p-4 flex flex-col gap-4 transition-all">
    <div className="flex flex-col gap-2 border-b-2 pb-2 lg:items-center">
      <h4 className="text-lg font-medium lg:text-xl lg:w-full">Amenities</h4>
      <ul className="max-w-[30ch] flex flex-col gap-2 text-sm lg:grid lg:grid-cols-4 lg:gap-4 lg:gap-x-6 lg:max-w-fit lg:text-lg">
        <li className="lg:max-w-[15ch]">King-sized bed & en suite bathroom</li>
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
    <div className="transition-all duration-500 ease-in-out overflow-hidden">
      <div className="flex justify-between items-center" onClick={() => setIsOpen(!isOpen)}>
        <h4 className="text-lg font-medium cursor-pointer lg:w-full inline-block">Rules</h4>
        <span className="transition-transform">
          <FontAwesomeIcon icon={isOpen ? faChevronCircleUp : faChevronCircleDown} className="text-blue-400" />
        </span>
      </div>
      <div className={`${isOpen ? 'flex' : 'hidden'} transition-all lg:justify-center`}>
        <ul className="max-w-[30ch] flex flex-col gap-2 text-sm lg:grid lg:grid-cols-4 lg:gap-4 lg:gap-x-6 lg:max-w-fit lg:text-[1rem]">
          <li>No pets</li>
          <li>No parties</li>
          <li>No smoking indoors</li>
          <li>No Functions</li>
          <li>No children</li>
          <li  className="lg:max-w-[15ch]">Noise restriction applicable to residential area</li>
          <li  className="lg:max-w-[15ch]">Strictly only the two guests on booking stay overnight</li>
        </ul>
      </div>
    </div>
  </div>
</section>

      {/* Contact Section */}
      <section id="contact" className="flex flex-col gap-4 mt-[3.375rem] lg:my-[2.625rem] lg:gap-12 mx-4">  
      <h2 className="text-2xl font-bold">Get in touch</h2>          
      <h4 className="">Get In Touch for availability and cost, or any inquiries</h4>
      <div className="flex flex-col gap-2 items-center mt-[1rem]">
            <ul className="max-w-[30ch] flex flex-col gap-6 text-[0.875rem]">
              <li className=" bg-white px-2 py-1 rounded-md font-medium text-lg  "><FontAwesomeIcon icon={faMobilePhone} size="2xl"/><a href="tel:+34618100493" className="ml-2">Click to Call</a></li>
              <li className="bg-[#25d366] px-2 py-1 rounded-md font-medium text-lg text-white"> <FontAwesomeIcon icon={faWhatsapp} size="2xl"/> <a className="ml-2" aria-label="Chat on WhatsApp" alt="Chat on WhatsApp" href="https://wa.me/34618100493?text=Hello,%20I%20was%20checking%20out%20Casa%20Magic%20online%20and%20would%20like%20to%20chat">Chat on WhatsApp</a></li>
            </ul>
          </div>
</section>
    </main>
  );
}

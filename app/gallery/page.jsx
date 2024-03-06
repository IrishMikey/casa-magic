import Link from "next/link"

import Image from 'next/image';

export default function Page() {
  const imagePaths = [
    '/gallery/dining-area.webp',
    '/gallery/kitchen.webp',
    '/gallery/master-bathroom.webp',
    '/gallery/master-bathroom-2.webp',
    '/gallery/master-room-b.webp',
    '/gallery/master-room-2.webp',
    // Add more image paths as needed
  ]
    return  <main className="flex min-h-screen flex-col mb-[6.25rem] ">      
     <section className="flex flex-col gap-4 mt-[3.375rem] lg:my-[2.625rem] lg:gap-12 mx-4">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold">Our Gallery</h2>          
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col justify-evenly gap-4 lg:flex-row">
            <div className="h-[175px] w-full  rounded bg-gray-300 lg:h-[356px] lg:rounded-2xl">
            
            </div>
           
          </div>
        </div>
        <h1>Gallery</h1>
      <div className="gallery">
        {imagePaths.map((imagePath, index) => (
          <div key={index} className="image-wrapper">
            <Image src={imagePath} alt={`Image ${index}`} width={300} height={200} />
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
     </main>
  }

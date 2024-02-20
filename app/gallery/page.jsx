import Link from "next/link"


export default function Page() {
    return  <main className="flex min-h-screen flex-col mb-[6.25rem] ">      
     <section className="flex flex-col gap-4 mt-[3.375rem] lg:my-[2.625rem] lg:gap-12 mx-4">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold">Our Gallery</h2>          
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
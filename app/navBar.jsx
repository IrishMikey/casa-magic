export default function NavBar() {
  return (
    <nav className="my-2 flex w-full px-2 shadow-md lg:mt-5 lg:items-center lg:justify-center">
      <div className="lg:w-[1440px]">
        <span className="lg:text-xl">Casa Magic</span>
      </div>
      {/* <div>
        <ul className="lg:px-[20px] py-1 ">
          <li className="flex gap-8">
            <a
              className="lg:text-[20px] transition-all hover:font-semibold"
              href="#home"
            >
              Home
            </a>
            <a
              className="lg:text-[20px] text-[17px] transition-all hover:font-semibold"
              href="#about"
            >
              About
            </a>
            <a
              className="lg:text-[20px] text-[17px] transition-all hover:font-semibold"
              href="#gallery"
            >
              Contact
            </a>
            <a
              className="lg:text-[20px] text-[17px] transition-all hover:font-semibold"
              href="#contact"
            >
              Contact
            </a>
          </li>
        </ul>
      </div> */}
    </nav>
  );
}

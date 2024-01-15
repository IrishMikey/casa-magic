export default function NavBar() {
  return (
    <nav className="my-[20px] w-full flex justify-between">
      <div>
        <span className="text-[22px]">Casa Magic</span>
      </div>
      <div>
        <ul className=" bg-opacity-60 px-[20px] py-1 ">
          <li className="flex gap-8">
            <a
              className="text-[20px] transition-all hover:font-semibold"
              href="#home"
            >
              Home
            </a>
            <a
              className="text-[20px] transition-all hover:font-semibold"
              href="#work"
            >
              Work
            </a>
            <a
              className="text-[20px] transition-all hover:font-semibold"
              href="#about"
            >
              About
            </a>
            <a
              className="text-[20px] transition-all hover:font-semibold"
              href="#contact"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

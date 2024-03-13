export default function Footer() {
  return (
    <footer className="flex w-full flex-col items-center justify-around gap-2 rounded-t-xl bg-[rgba(23,37,84,0.96)] p-3 text-white lg:flex-row">
      <section>
        <p className="">
          Casa Magic{" "}
          <span className="text-[0.875rem]">
            - Tenerife&apos;s best holiday rental
          </span>
        </p>
      </section>
      <section>
        <span className="text-sm">
          Designed and developed by{" "}
          <a
            href="mgwebs.com"
            className="active::text-[#006eff] underline hover:text-[#006eff]"
          >
            MGWebs
          </a>
        </span>
      </section>
    </footer>
  );
}

export default function Footer() {
  return (
    <footer className="flex w-full flex-col items-center justify-around gap-2 bg-[#F2F2F2] p-3 lg:flex-row rounded-t-md">
      <section>
        <p className="">
          Casa Magic{" "}
          <span className="text-[0.875rem] text-[#5d5454]">
            - Tenerife&apos;s best holiday rental
          </span>
        </p>
      </section>
      <section>
        <span className="text-sm text-[#5d5454]">
          Designed and developed by{" "}
          <a
            href="https://mgwebs.com"
            className="active::text-[#006eff] underline hover:text-[#006eff]"
          >
            MGWebs
          </a>
        </span>
      </section>
    </footer>
  );
}

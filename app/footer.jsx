export default function Footer() {
  return (
    <footer className="flex w-full flex-col items-center gap-2 bg-[#F2F2F2] p-3 lg:flex-row">
      <section>
        <p className="text-[16px]">
          Casa Magic{" "}
          <span className="text-[14px] text-[#5d5454]">
            - Tenerife&apos;s best holiday rental
          </span>
        </p>
      </section>
      <section>
        <span className="text-[14px] text-[#5d5454]">
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

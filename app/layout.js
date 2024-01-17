import { Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "./navBar";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "500"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Casa Magic - Tenerife Holiday Rental",
  description: "Designed & crafted by MGWebs.com",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} lg:max-w-[1440px] lg:m-auto lg:py-[18px] lg:px-[16px] mx-3`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}

import { Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "./navBar";
import Footer from "./footer";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "500", "600", "700"],
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
        className={`${poppins.className} mx-auto  flex min-h-screen flex-col lg:max-w-[1200px]`}
      >
        <NavBar />
        {children}

        <Footer />
      </body>
    </html>
  );
}

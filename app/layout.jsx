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
<<<<<<< HEAD
      <body
        className={`${poppins.className} lg:max-w-[1440px] flex h-screen flex-col`}
      >
=======
      <body className={`${poppins.className} lg:m-auto `}>
>>>>>>> 9482804e0be3fb3ca88b937879795109b02bcdab
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

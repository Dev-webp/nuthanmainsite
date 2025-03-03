import { Inter } from "next/font/google";
import "../globals.css"; // Import global styles

import Footer from "../components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "VJC OVERSEAS",
  description: "Sign up & Get Free Assistance",
};

export default function RootLayout({ children }) {
  return (
    <div className={inter.className}>
     {/* Navbar is now included globally */}
      <main>{children}</main> {/* This renders all child pages */}
      <Footer/>

    </div>
  );
}

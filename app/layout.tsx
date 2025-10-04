import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";
import ScrollToTop from "@/components/Helper/ScrollToTop";
import AnimatedCursor from "react-animated-cursor"

const font = Poppins({
  weight:['100', '200', '300', '400', '500', '600', '700', '800'],
  subsets:['latin'],
});

export const metadata: Metadata = {
  title: "Vaishak P",
  description: "Aspiring React Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="custom-scrollbar">
      <body
        className={font.className}
      >
        <div className="hidden md:block">
          <AnimatedCursor innerSize={8} outerSize={24} innerScale={2} outerScale={2} outerAlpha={0} innerStyle ={{backgroundColor:'white'}} outerStyle={{border:'3px solid white'}}/>
        </div>
        <ResponsiveNav></ResponsiveNav>
        {children}
        <Footer></Footer>
        <ScrollToTop></ScrollToTop>
      </body>
    </html>
  );
}

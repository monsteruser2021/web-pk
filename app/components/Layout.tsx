import { useState } from "react";
import MobileNav from "./Navbar/MobileNav";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

export default function Layout({ children }: any) {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  return <>
    <Navbar openNav={openNav} />
    <MobileNav nav={nav} closeNav={closeNav} />
    {children}
    <Footer />
  </>
}
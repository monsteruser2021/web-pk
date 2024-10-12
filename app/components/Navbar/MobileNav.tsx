import React from 'react'
import Link from 'next/link';
import { GoXCircle } from "react-icons/go";

interface Props {
  nav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ nav, closeNav }: Props) => {

  const navAnimation = nav ? "translate-x-0" : "translate-x-[-100%] ";

  return (
    <div className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[1000000] bg-primary dark:bg-quaternary `}>
      <div className='uppercase font-outfit w-[100vw] h-[100vh] flex flex-col items-center justify-center'>
        <div
          onClick={closeNav}
          className='nav-link-mobile'>
          <Link href={'/#'}>Hogar</Link>
        </div>
        <div
          onClick={closeNav}
          className='nav-link-mobile'>
          <Link href={'/#'}>Mas Vendidos</Link>
        </div>
        <div
          onClick={closeNav}
          className='nav-link-mobile'>
          <Link href={'/#'}>Combos</Link>
        </div>
        <div
          onClick={closeNav}
          className='nav-link-mobile'>
          <Link href={'/#'}>Material POP</Link>
        </div>
        <div
          onClick={closeNav}
          className='nav-link-mobile'>
          <Link href={'/#'}>Contacto</Link>
        </div>
      </div>
      <div
        onClick={closeNav}
        className='absolute z-[100000000] cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] dark:text-white '>
        <div className='text-[2rem]'>
          <GoXCircle />
        </div>
      </div>
    </div>
  )
}

export default MobileNav
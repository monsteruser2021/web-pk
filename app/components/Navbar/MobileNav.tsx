import React from 'react'
import Link from 'next/link';
import { IoIosCloseCircle } from "react-icons/io";
const menuMobile = [
  {
    id: 1,
    name: "Hogar",
    link: "/#",
  },
  {
    id: 2,
    name: "Mas vendidos",
    link: "/#",
  },
  {
    id: 3,
    name: "Combos",
    link: "/#",
  },
  {
    id: 4,
    name: "Material POP",
    link: "/#",
  },
  {
    id: 5,
    name: "Contacto",
    link: "/#",
  },
]

interface Props {
  nav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ nav, closeNav }: Props) => {

  const navAnimation = nav ? "translate-x-0" : "translate-x-[-100%] ";

  return (
    <div className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[1000000] bg-primary dark:bg-quaternary `}>
      <div className='uppercase font-outfit w-[100vw] h-[100vh] flex flex-col items-center justify-center'>
          {menuMobile.map((data, key) =>
            <li 
            onClick={closeNav}
            className='nav-link-mobile' key={key}>
              <Link href={data.link}>{data.name}</Link>
            </li>
          )}
      </div>
      <div
        onClick={closeNav}
        className='absolute z-[100000000] cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] dark:text-white '>
        <div className='text-[2rem]'>
          <IoIosCloseCircle />
        </div>
      </div>
    </div>
  )
}

export default MobileNav
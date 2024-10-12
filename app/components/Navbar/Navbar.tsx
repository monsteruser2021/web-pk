import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import ThemeToggle from './ThemeToggle';
import { FaBarsStaggered } from "react-icons/fa6";

const menu = [
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
  openNav: () => void;
}

const Navbar = ({ openNav }: Props) => {
  return (
    <div className='w-[100%] h-[8vh] fixed z-[10000] top-0 bg-primary dark:bg-quaternary font-outfit text-neutral-900 dark:text-gray-100 shadow-lg'>
      <div className='flex items-center justify-between w-[80%] h-[100%] mx-auto '>
        {/*Logo*/}
        <div className='cursor-pointer'>
          <Link href={'/#'}>
            <Image 
            src={'/assets/Logo.png '}
            alt=''
            width={50}
            height={50}
            />
          </Link>
        </div>
        {/*Menu*/}
        <div className='hidden lg:block md:mx-auto md:w-auto md:h-auto md:gap-1 md:text-[10px]'>
          <ul className='flex gap-4'>
            {menu.map((data, key) =>
              <li className='nav-menu' key={key}>
                <Link href={data.link}>{data.name}</Link>
              </li>
            )}
          </ul>
        </div>
        {/*DarkMode Switch y Hamburger Menu*/}
        <div className='flex items-center'>
            <ThemeToggle/>
          <div onClick={openNav}>
            <FaBarsStaggered className='ml-[2rem] w-[2rem] h-[2rem] md:hidden cursor-pointer dark:text-gray-100'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
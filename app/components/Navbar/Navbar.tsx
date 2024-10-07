import React from 'react'
import Link from 'next/link';

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
    name: "Promociones",
    link: "/#",
  },
  {
    id: 4,
    name: "Combos",
    link: "/#",
  },
  {
    id: 5,
    name: "Contacto",
    link: "/#",
  },
]

const Navbar = () => {
    
  return (
    <div className='w-[100%] fixed z-[10000] top-0 bg-primary/20 dark:text-gray-100 shadow-lg '>
        <div className='py-4 dark:bg-quinary '>
            <div className='container font-inter'>
                {/*Logo & links*/}
                <div className='flex items-center justify-between'>
                  <Link 
                  href={'/#'}
                  className='font-bold tracking-widest text-2xl uppercase sm:text-3xl mx-[2rem]'>
                    <h1 className='text-primary'>P<span className='text-black'>K</span></h1>
                  </Link>
                  {/*Menu*/}
                    <div className='hidden lg:block md:mx-auto md:w-auto md:h-auto md:gap-1 md:text-[10px] '>
                        <ul className='flex gap-4'>
                        {
                          menu.map((data) => (
                            <li key={data.id}>
                              <Link 
                              href={data.link}
                              className='nav-menu'>
                                {data.name}
                              </Link>
                            </li>
                          ))
                        }
                        </ul>
                    </div>{/*
                    Login
                    <div className='grid grid-cols-2'>
                        <button className='font-bold uppercase mx-auto my-auto bg-gray-300 dark:bg-black dark:bg-gray-gray-950 border-black dark:border-white border-[2px] rounded-full py-1 px-3 hover:scale-110 duration-200 md:block hidden'>Ingresar</button>
                        DarkMode Switch
                        <div className='mx-auto my-auto'>
                            <DarkMode/>
                        </div>
                        Burguer
                        <div onClick={openNav}>
                            <FaBars className='mx-[1rem] w-[2rem] md:hidden h-[2rem] cursor-pointer dark:text-white '/>
                        </div>
                    </div>*/}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
"use client";
import { useEffect, useState } from 'react';
import { FaMoon } from 'react-icons/fa6';
import { BsSunFill } from 'react-icons/bs';

import React from 'react'

const Themetoggle = () => {

    const [darkMode, setDarkMode] = useState(true)

    useEffect(() => {
        const theme = window.localStorage.getItem("theme")
        if (theme === "dark") setDarkMode(true)
    }, [])

    useEffect (() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            window.localStorage.setItem("theme", "dark");
        } else{
            document.documentElement.classList.remove('dark');
            window.localStorage.setItem("theme", "light");
        }
    }, [darkMode])

  return (
    <div className='relative w-16 h-8 flex items-center dark:bg-gray-900 bg-tertiary cursor-pointer rounded-full p-1 '
    onClick={() => setDarkMode(!darkMode)}
    >
        <FaMoon className='text-gray-900 ' size={18}/>
        <div className='absolute bg-gray-100 w-6 h-6 rounded-full shadow-md transform transition-transform duration-200 '
        style={darkMode ? {left: "2px"} :{right:"2px"}}
        ></div>
        <BsSunFill className='ml-auto text-yellow-400'
        size={18}/>
    </div>
  )
}

export default Themetoggle
"use client";

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react';

const Navbar = () => {
    const [openMobileNav, setOpenMobileNav] = useState(false);
    
  return (
    <nav className='flex-center max-md:flex-col fixed top-0 z-50 w-full border-b-2 border-black-200 bg-black-200 py-7 text-white'>
        <div className="flex-between mx-auto w-full max-w-screen-2xl px-6 xs:px-8 sm:px-16">
            <Link href='/'>
                <Image
                    src="/jsm-logo.svg"
                    alt="logo"
                    width={55}
                    height={40}
                />
            </Link>
            <div className="">
                {!openMobileNav ? (
                    <Image
                        src="/hamburger-menu.svg"
                        alt='hamburger menu'
                        width={30}
                        height={30}
                        className='block md:hidden cursor-pointer'
                        onClick={()=>setOpenMobileNav(true)}
                    />
                    ): (
                        <Image
                            src="/x.svg"
                            alt='close menu'
                            width={30}
                            height={30}
                            className='block md:hidden cursor-pointer'
                            onClick={()=>setOpenMobileNav(false)}
                        />   
                )}
            </div>

            <ul className='flex-center gap-x-3 max-md:hidden md;gap-x-10'>
                <li className="body-text text-gradient_blue-purple !font-bold">
                    <Link
                        href="/"
                        target='_blank'
                    >
                        Next.js 14.0 Course
                    </Link>
                </li>
                <li className="body-text !font-normal">
                    <Link
                        href="/"
                        target='_blank'
                    >
                        Masterclass
                    </Link>
                </li>
            </ul>
        </div>
        <ul className={`w-full flex-center !items-end gap-5 md:hidden ${!openMobileNav? '!h-0 overflow-hidden':'!h-12'} transition-all duration-300`}>
            <li className={`body-text text-gradient_blue-purple !font-bold ${!openMobileNav? 'opacity-0 delay-0':'opacity-100 delay-300'} transition-opacity`}>
                <Link
                    href="/"
                    target='_blank'
                >
                    Next.js 14.0 Course
                </Link>
            </li>
            <li className={`body-text !font-normal ${!openMobileNav? 'opacity-0 delay-0':'opacity-100 delay-300'} transition-opacity`}>
                <Link
                    href="/"
                    target='_blank'
                >
                    Masterclass
                </Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
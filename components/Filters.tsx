"use client";

import { useState } from 'react'

const links = ['all', "next 13","frontend", "backend", "fullstack"];

const Filters = () => {
    const [active, setActive] = useState('all');

    const handleFilter = (link:string) => {
        setActive(link)
    }

    return (
        <ul className="text-white-800 body-text no-scrollar flex w-full max-w-full gap-2 overflow-auto py-12 sm:max-w-2xl">
            {links.map((link, index) => (
                <button
                    key={index}
                    type='button'
                    className={`whitespace-nowrap px-8 py-2.5 capitalize rounded-md ${active === link ? "gradient_blue-purple" : ""}`}
                    onClick = {()=>handleFilter(link)}
                >
                    {link}
                </button>
            ))}

        </ul>
    )
}

export default Filters
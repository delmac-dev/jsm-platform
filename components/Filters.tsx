"use client";

import { formUrlQuery } from '@/sanity/utils';
import { useSearchParams, useRouter } from 'next/navigation';
import { useState } from 'react'

const links = ['all', "next 13","frontend", "backend", "fullstack"];

const Filters = () => {
    const searchParams = useSearchParams();
    const [active, setActive] = useState(searchParams.get('category') || '');
    const router = useRouter();

    const handleFilter = (link:string) => {
        let newUrl = '';

        if(active === link) {
            setActive('');
            newUrl = formUrlQuery({
                params: searchParams.toString(),
                keysToRemove: ['category']
            });
        } else {
            setActive(link);
            newUrl = formUrlQuery({
                params: searchParams.toString(),
                key: "category",
                value: link.toLowerCase()
            });
        }

        router.push(newUrl, { scroll: false } );
    }

    return (
        <ul className="text-white-800 body-text no-scrollbar flex w-full max-w-full gap-2 overflow-auto py-8 sm:max-w-2xl">
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
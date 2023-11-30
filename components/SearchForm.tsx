"use client";

import Image from 'next/image';
import { Input } from './ui/input';
import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { formUrlQuery } from '@/sanity/utils';

const SearchForm = () => {
    const [search, setSearch] = useState('');
    const searchParams = useSearchParams();
    const router = useRouter();


    useEffect(()=> {
        const delayDeounceFn = setTimeout(()=> {
            let newUrl = '';
            if(search){
                newUrl = formUrlQuery({
                    params: searchParams.toString(),
                    key: 'query',
                    value: search
                })
            }else {
                newUrl = formUrlQuery({
                    params: searchParams.toString(),
                    keysToRemove: ['query']
                })  
            }

            router.push(newUrl, { scroll: false });
            
        }, 1000);

        return () => clearTimeout(delayDeounceFn)
    }, [search]);

    return (
        <form className='flex-center mx-auto mt-10 w-full sm:-mt-10 sm:px-5'>
            <label className='flex-center relative w-full max-w-3xl'>
                <Image
                    src="/magnifying-glass.svg"
                    alt='search icon'
                    className='absolute left-8'
                    width={32}
                    height={32}
                />
                <Input
                    className='base-regular h-fit border-0 bg-black-400 py-6 pl-20 pr-8 text-white-800 !ring-0 !ring-offset-0 placeholder:text-white-800'
                    placeholder='search'
                    type='text'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </label>
        </form>
    )
}

export default SearchForm
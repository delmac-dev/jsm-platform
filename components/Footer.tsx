import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='flex-between items-start body-text w-full gap-y-5 border-t border-black-400 bg-black-100 px-12 py-12 max-md:flex-col text-white-800'>
      <p className='text-center opacity-80'>Copyright @ 2023 JS Mastery Pro | All Rights Reserved</p>
      <div className="flex gap-x-9">
        <Link href='/terms-of-use' className='hover:text-gradient'>Terms & Conditions</Link>
        <Link href='/privacy-policy' className='hover:text-gradient'>Privacy Policy</Link>
      </div>
    </footer>
  )
}

export default Footer
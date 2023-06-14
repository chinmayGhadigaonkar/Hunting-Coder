import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <>
    <div className="h-16   flex  justify-center items-center">
        <ul className='flex  flex-wrap justify-center items-center  mx-3 '>
          <Link href="/">
          <li className='mx-4  sm:text-lg font-bold hover:cursor-pointer hover:underline '>Home</li>
          </Link>
            <Link href="/about">
            <li className='mx-4  sm:text-lg font-bold hover:cursor-pointer hover:underline '>About </li>
            </Link >
            <Link href="/blog">
            <li className='mx-4  sm:text-lg font-bold hover:cursor-pointer hover:underline '>Blog </li>
            </Link>
            <Link href="/contactus">
            <li className='mx-4  my-2 sm:text-lg font-bold hover:cursor-pointer hover:underline '>Contact Us</li>
            </Link>
            
            
            
        </ul>
    </div>
    </>
  )
}

export default Navbar
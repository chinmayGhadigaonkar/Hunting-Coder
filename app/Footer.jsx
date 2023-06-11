import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <>
    <div className=" h-16 flex justify-center items-center bg-black text-white">
        <p>Made with ❤️❤️❤️ by <Link target='_blank' href="https://github.com/chinmayGhadigaonkar" > @chinmayGhadigaonkar </Link></p>
    </div>
    </>
  )
}

export default Footer
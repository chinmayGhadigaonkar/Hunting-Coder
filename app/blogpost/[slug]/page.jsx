"use client"
import { usePathname } from 'next/navigation'

 
export default function Page() {

  const pathname = usePathname()
  return <p>Post: {pathname.split("/")[2]}</p>
}
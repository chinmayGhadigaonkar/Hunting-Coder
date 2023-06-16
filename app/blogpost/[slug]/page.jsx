"use client"
import { usePathname } from 'next/navigation'
import Image from "next/image"


const fetchdata = async(id)=>{
  const res = await fetch(`http://localhost:3000/api/getblog/${id}`)
  const blogpost = await res.json()
  return blogpost
}

 
export default async function Page() {

  const pathname = usePathname()
  const id =pathname.split("/")[2]
  const blog = await fetchdata(id);
 

  const date =new Date(blog.date).toUTCString()
  // console.log(week)


  return (
    <>
     <div className="  card m-auto w-[20rem]  my-10 sm:w-[40rem] md:w-[54rem]" >
          <h1 className="font-bold  text-3xl text-center my-5 "> {blog.title}</h1>
          <p className='text-center my-3' >{date}</p>
          <h3 className='text-center my-2 '>Author :- <span className='font-semibold text-lg '> {blog.author}</span> </h3>
          <Image   src="/BG.jpg" alt="..." className=" rounded-md my-4 m-auto " width={200} height={300} priority={true} />
          <p className='text-sm text-opacity-70 p-2    m-auto  '>{blog.description}</p>
         
       
        </div>
    </>
  )
}
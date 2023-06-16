import React from 'react'
import Link from 'next/link'

export const fetchdata = async()=>{
  const res = await fetch("http://localhost:3000/api/getblog")
  const blog = await res.json()
  return blog
}

const blog = async() => {

  const blog = await fetchdata();

 
  return (
    <>
      <div className="mt-6 mb-3 m-auto   w-[20rem] ">

        <h1 className='text-center font-semibold text-3xl'>Blogs</h1>
        {
          blog.map((blog)=>{
            return(
            <div className="card  my-10" key={blog._id}>
          <h3 className="font-semibold  text-lg "> {blog.title}</h3>
          <p>{(blog.description).length>30?(blog.description).slice(0,50)+"..." :blog.description  }</p>
          <Link href={`/blogpost/${blog._id}`}>
          <button className=' bg-black text-white m-auto w-24 rounded-lg h-8 text-sm my-2  font-normal  hover:bg-white hover:text-black hover:border-2 hover:border-black  '>
            Read More</button>
          </Link>
       
        </div>
            )
          })
        }
        

        {/* <div className="card mt-2">
          <h3 className="font-semibold text-lg  "> JavaScipt Blog</h3>
          <p>Lorem ipsum dolor sit amet.Lorem ipsum dolor sit.</p>
        </div>
        <div className="card mt-2">
          <h3 className="font-semibold  text-lg "> JavaScipt Blog</h3>
          <p>Lorem ipsum dolor sit amet.Lorem ipsum dolor sit.</p>
        </div>
        <div className="card mt-2">
          <h3 className="font-semibold text-lg  "> JavaScipt Blog</h3>
          <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.
            .</p>
        </div> */}
      </div>
    </>
  )
}

export default blog
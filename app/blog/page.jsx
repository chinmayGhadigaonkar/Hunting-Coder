import React from 'react'


const fetchdata = async()=>{
  const res = await fetch("http://localhost:3000/api/getblog")
  const blog = await res.json()
  return blog
}

const blog = async() => {

  const blog = await fetchdata();

 
  return (
    <>
      <div className="mt-6 mb-3 m-auto   w-[20rem] ">
        <h2 className=" text-2xl font-bold my-2  ">Popular Blogs</h2>

        {
          blog.map((b)=>{
            return(

            <div className="card mt-4 " key={b._id}>
          <h3 className="font-semibold  text-lg "> {b.title}</h3>
          <p>{b.description}</p>
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
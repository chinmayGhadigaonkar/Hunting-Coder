import Image from "next/image"



export default function Home() {
  return (
    <>
      <div className="  flex flex-col justify-center items-center py-12 ">
        <h1 className="font-bold text-[2.5rem]  ">Hunting Coder</h1>
        <Image   src="/BG.jpg" className=" rounded-md my-4 " width={350} height={600}/>
        <p className=" text-sm  mt-3 ">Blog for hunting coder by hunting coder </p>
        <div className="mt-6 mb-3 m-auto  w-70 ">
          <h2 className=" text-2xl font-bold my-2  ">Popular Blogs</h2>
          <div className="card mt-2 ">
            <h3 className="font-semibold  text-lg "> JavaScipt Blog</h3>
            <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.</p> 
          </div>
          <div className="card mt-2">
            <h3 className="font-semibold text-lg">JavaScipt Blog</h3>
             <p>Lorem ipsum dolor sit amet.Lorem ipsum dolor sit.</p> 
          </div>
          <div className="card mt-2">
            <h3 className="font-semibold  text-lg ">JavaScipt Blog</h3>
             <p>Lorem ipsum dolor sit amet.Lorem ipsum dolor sit.</p> 
          </div>
          <div className="card mt-2">
            <h3 className="font-semibold text-lg  "> JavaScipt Blog</h3>
             <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.</p> 
          </div>        
        </div>

      </div>
    </>
  )
}

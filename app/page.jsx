import Image from "next/image"



export default function Home() {
  return (
    <>
      <div className="  flex flex-col justify-center items-center py-12 ">
        <h1 className="font-bold text-[2.5rem]  ">Hunting Coder</h1>
        <Image   src="/BG.jpg" className=" rounded-md my-4 " alt="...." width={300} height={500}/>
        <p className=" text-sm  mt-3 ">Blog for hunting coder by hunting coder </p>
        <div className="mt-6 mb-3 m-auto  w-70 px-3 ">
          <h2 className=" text-2xl font-bold my-2  ">Popular Blogs</h2>
          <div className="card mt-2 ">
            <h3 className="font-semibold  text-lg "> JavaScipt Blog 2022 </h3>
            <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.</p> 
            <hr className="border-[1.5px] border-black my-3 border-solid " />
          </div>
          <div className="card mt-2">
            <h3 className="font-semibold text-lg">JavaScipt Blog 2022 </h3>
             <p>Lorem ipsum dolor sit amet.Lorem ipsum dolor sit.</p> 
          </div>
          <div className="card mt-2">
            <h3 className="font-semibold  text-lg ">JavaScipt Blog 2022 </h3>
             <p>Lorem ipsum dolor sit amet.Lorem ipsum dolor sit.</p>
             <hr className="border-[1.5px] border-black my-3 border-solid" /> 
          </div>
          <div className="card mt-2">
            <h3 className="font-semibold text-lg  "> JavaScipt Blog 2022 </h3>
             <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.</p> 
            
          </div>        
        </div>

      </div>
    </>
  )
}

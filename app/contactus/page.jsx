import React from 'react'

const contact = () => {
  return (
    <>
    <div className='-mt-[5rem] h-[27rem]'>
      <h1 className='text-center pb-5 font-semibold text-3xl '>Contact Us</h1>
      <div className=' rounded-lg w-[23rem] m-auto'>
      <form action="" className='m-auto w-[22rem]  py-3'>
        <p className=' text-lg font-medium  ml-2  '>Enter Name</p>
        <input type="text" className=' text-lg font-medium  ml-2 my-2  border-2  pl-2 h-9 w-[18.8rem] border-black rounded-lg  ' />
        <p className=' text-lg font-medium  ml-2 '>Email</p>
        <input type="email" className=' text-lg font-medium  ml-2 my-2  border-2  pl-2 h-9 w-[18.8rem] border-black rounded-lg ' />
        <p className=' text-lg font-medium  ml-2 ' >Messaage</p>
        <textarea name="msf" id="" cols="30" rows="5" className=' text-lg font-medium  ml-2 my-2  border-2 pl-2  border-black rounded-lg '></textarea><br />

        <button className=' bg-black text-white m-auto w-36 rounded-lg h-8 text-lg font-medium  ml-2 hover:bg-white hover:text-black hover:border-2 hover:border-black  '>Send</button>

      </form>
        
      </div>
     
    </div>
    </>
  )
}

export default contact
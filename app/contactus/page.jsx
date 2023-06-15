"use client"
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { Toast, toast } from "react-hot-toast";

const contact = () => {
  const router = useRouter()
  // const pathname = usePathname()
  const [inputValue, setinputValue] = useState({ name: "", email: "", msg: "" })
  const Senddata = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/getcontact", {
        method: 'POST',
        headers: {
          "content-type":"application/json"
        },
        body: JSON.stringify({
          name: inputValue.name,
          email: inputValue.email,
          meassage: inputValue.msg
        })
      })
      const data = await res.json()
      console.log(data)
      if(data.success){
        toast.success("succesfully send")
      }
      return data.sucess
    }
    catch (e) {
     
      toast.error("Something went's wrong")
      return false
    }

  }

  const handleChange = (e) => {
    console.log(e.target.value)
    setinputValue({...inputValue, [e.target.name]: e.target.value})
  }
  const SendMsg = async (e) => {
    e.preventDefault();
    const sucess = await Senddata()
    if (sucess) {
      // console.log(sucess);
      router.push("/")
      toast.success("Message Successfully sent")

    }
  }
  return (
    <>
      <div className=' '>
        <h1 className='text-center pb-5 font-semibold text-3xl '>Contact Us</h1>
        <div className=' rounded-lg m-auto'>
          <form action="" className='m-auto w-[19rem] sm:w-[30rem]  py-3'>
            <p className=' text-lg font-medium  ml-2  '>Enter Name</p>
            <input type="text" name='name' onChange={handleChange} className=' text-lg font-medium  ml-2 my-2  border-[1px] border-black   pl-2 h-9 w-[18.8rem] sm:w-[25rem] hover:outline-black rounded-lg   ' value={inputValue.name} />
            <p className=' text-lg font-medium  ml-2 '>Email</p>
            <input type="email" name='email' onChange={handleChange} className=' text-lg font-medium  ml-2 my-2  border-[1px] border-black   pl-2 h-9 w-[18.8rem] sm:w-[25rem] hover:outline-black rounded-lg  ' value={inputValue.email} />
            <p className=' text-lg font-medium  ml-2 ' >Messaage</p>
            <textarea name="msg" onChange={handleChange} value={inputValue.msg} id="" cols="30" rows="5" className='  border-black  text-lg font-medium w-[18.8rem] ml-2 my-2 sm:w-[25rem] border-[1px] pl-2 hover:outline-black rounded-lg   ' ></textarea><br />

            <button className=' bg-black text-white m-auto w-24 rounded-lg h-8 text-sm my-2  font-normal  hover:bg-white hover:text-black hover:border-2 hover:border-black ml-2 ' onClick={SendMsg} >Send</button>

          </form>

        </div>

      </div>
    </>
  )
}

export default contact
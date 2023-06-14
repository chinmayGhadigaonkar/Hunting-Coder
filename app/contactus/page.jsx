"use client"
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

const contact = () => {
  const router = useRouter()
  // const pathname = usePathname()
  const [inputValue ,setinputValue]= useState({name:"" ,email:"",msg:""})
  const Senddata= async()=>{
    try{
     const res =await fetch("http://localhost:3000/api/getcontact",{
      method: 'post',
      body:{name: inputValue.name,
    email: inputValue.email,
  msg:inputValue.msg }
     })
     const data = await res.json()
     console.log(data)
     return data
    }
    catch(e){
      console.log(e)
      return e 
    }

  }

  const handleChange =(e)=>{
    setinputValue({...inputValue , [e.target.name]:[e.target.value]})
  }
  const SendMsg=async(e)=>{
    e.preventDefault();
    const sucess= await Senddata()
    if(sucess){
      console.log(sucess);
    
    }
  }
  return (
    <>
    <div className=' '>
      <h1 className='text-center pb-5 font-semibold text-3xl '>Contact Us</h1>
      <div className=' rounded-lg w-[23rem] m-auto'>
      <form action="" className='m-auto w-[22rem]  py-3'>
        <p className=' text-lg font-medium  ml-2  '>Enter Name</p>
        <input type="text" name='name' onChange={handleChange} className=' text-lg font-medium  ml-2 my-2  border-2  pl-2 h-9 w-[18.8rem] border-black rounded-lg   ' value={inputValue.name}/>
        <p className=' text-lg font-medium  ml-2 '>Email</p>
        <input type="email" name='email' onChange={handleChange} className=' text-lg font-medium  ml-2 my-2  border-2  pl-2 h-9 w-[18.8rem] border-black rounded-lg  ' value={inputValue.email} />
        <p className=' text-lg font-medium  ml-2 ' >Messaage</p>
        <textarea name="msg" onChange={handleChange} value={inputValue.msg} id="" cols="30" rows="5" className=' text-lg font-medium  ml-2 my-2  border-2 pl-2  border-black rounded-lg   ' ></textarea><br />

        <button className=' bg-black text-white m-auto w-36 rounded-lg h-8 text-lg font-medium  ml-2 hover:bg-white hover:text-black hover:border-2 hover:border-black  ' onClick={SendMsg} >Send</button>

      </form>
        
      </div>
     
    </div>
    </>
  )
}

export default contact
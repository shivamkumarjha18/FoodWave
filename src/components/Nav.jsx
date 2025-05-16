import React, { useContext, useEffect } from 'react'
import { IoFastFoodSharp } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { LuShoppingBag } from "react-icons/lu";

import {dataContext} from '../context/Usercontext';
import { food_items } from '../Food';
import { useSelector } from 'react-redux';



function Nav() {
   
    let {input,setinput,Cate,setCate,showcart,setshowcart}=useContext(dataContext)
    useEffect(()=>{
      let newlist=  food_items.filter((item)=>item.food_name.includes(input)||item.food_name.toLowerCase().includes(input))
      setCate(newlist)
    },[input])
     let items=useSelector(state=>state.cart)
  return (
    <div className='w-full h-[100px] flex justify-around items-center '>
    <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl  '><IoFastFoodSharp className='w-[30px] h-[30px] text-green-500 ' /></div>
    <form className='bg-white flex justify-center items-center h-[60px] w-[45vw] gap-[2%] rounded-2xl shadow-2xl md:w-[70vw]'><CiSearch className='text-green-500 font-bold w-[30px] h-[30px]' onSubmit={(e)=>{
        e.preventDefault()
    }} />
        <input type="text" placeholder='Search items...' className='w-[100%] outline-none text-[13px] text-green-400 md:text-xl' onChange={(e)=>setinput(e.target.value)} value={input} />

</form>
<div className='w-[60px] h-[60px]  bg-white flex justify-center items-center shadow-xl relative' onClick={()=>{
    setshowcart(true)
}}>
    <span className='absolute top-0 right-2 text-green-500 font-black text-[18px]'>{items.length}</span>
    <LuShoppingBag  className='w-[30px] h-[30px] text-green-500' /></div>
</div>

  )
}

export default Nav
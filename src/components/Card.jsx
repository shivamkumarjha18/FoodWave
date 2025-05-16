import React from 'react'
import image1 from "../assets/image1.avif"
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch } from 'react-redux';
import { Additem } from '../redux/Cartslice';
import { toast } from "react-toastify";
function Card({name,image,id,price,type}) {
    let dispatch=useDispatch()
  return (
    <div className='w-[240px] h-[320px] bg-white p-3 rounded-lg flex flex-col gap-3 shadow-lg hover:border-2 border-green-300 cursor-pointer'>
        <div className='w-[100%] h-[60%] overflow-hidden'><img src={image} alt="Card image" className='object-cover rounded-lg'/></div>
        <div className='text-2xl bold'>{name}</div>
       <div className='w-full flex justify-between items-center'>
        <div className='text-lg font-bold  text-green-500'>Rs {price}/-</div>
      <div className='flex justify-center items-center gap-2 text-green-400 text-lg font-semibold'>{type==="veg"?<LuLeafyGreen />:<GiChickenOven className='text-red-600' /> }
      <span>{type}</span></div> 
       </div> 
       <button
      className="w-[100%] p-3 bg-green-600 rounded-lg text-white hover:bg-green-400 transition-all"
      onClick={() => {
        dispatch(Additem({ id, name, price, image, qty: 1 }));
        toast.success("Item added successfully!");
      }}
    >
      Add to dish
    </button>
    </div>
  )
}

export default Card

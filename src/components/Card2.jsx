import React from 'react'
import image1 from "../assets/image1.avif";
import { IoTrashBinSharp } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { Decrementqty, Incrementqty, Removeitem } from '../redux/Cartslice';
const Card2 = ({name,id,price,image,qty}) => {
    let dispatch=useDispatch()
  return (
    <div className='w-full h-[120px] shadow-lg flex justify-between'>
         <div className='w-[60%] h-full  p-2 flex gap-4'>
            <div className='w-[60%] h-full overflow-hidden rounded-lg'><img src={image} alt=""  className='object-cover '/>
            </div>
            <div className='w-[40%] h-full flex  flex-col gap-4'>
                <div className='text-lg text-gray-600 font-bold'>{name}</div>
                <div className='w-[80% ] h-[50px] bg-slate-100 flex rounded-lg overflow-hidden shadow-2xl font-bold border-2 border-green-400 text-xl'>
                    <button className=' w-[30%] h-full bg-white flex justify-center items-center text-green-400 hover:bg-gray-300' onClick={()=>{
                        dispatch(Decrementqty({id}))
                    }}>-</button>
                    <span className='w-[40%] h-full bg-slate-200 flex justify-center items-center text-green-400 hover:bg-gray-300'>{qty}</span>
                    <button className=' w-[30%] h-full bg-white flex justify-center items-center text-green-400 hover:bg-gray-300' onClick={()=>{
                        dispatch(Incrementqty({id}))
                    
                    }}>+</button>
                </div>
            </div>
         </div>
         <div className='flex flex-col justify-start items-end gap-6'>
<span className='text-xl text-green-400 font-semibold'> Rs {price}/- </span>
<IoTrashBinSharp  className='w-[30px] h-[30px] text-red-500 cursor-pointer ' onClick={()=>{
    dispatch(Removeitem(id))}
}/>
         </div>
    </div>
  )
}

export default Card2
import React, { useContext, useState } from 'react'
import Nav from '../components/Nav'
import Categories from '../categories'
import Card from '../components/Card'
import { food_items } from '../Food'
import { dataContext } from '../context/Usercontext'
import { ImCross } from "react-icons/im";
import Card2 from '../components/Card2'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
const Home = () => {
   let {Cate,setCate,input,showcart,setshowcart}=useContext(dataContext)
    function Filtercategory(Category){
        if(Category==="All"){
            setCate(food_items)
        }else{
            let itemslist=food_items.filter((data)=>(
                data.food_category==Category
            ))
            setCate(itemslist)
        }
    }
   let items=useSelector(state=>state.cart)
   console.log(items)
   let subtotals=items.reduce((total,item)=>total+item.qty*item.price,0)
   let deliveryfee=20
   let taxes=subtotals*0.5/100
   let total=Math.floor(subtotals+deliveryfee+taxes)
   console.log(subtotals)
  return (
    <div className='bg-slate-300  w-full min-h-[100vh]'><Nav></Nav>
    {!input?<div className='flex flex-wrap justify-center items-center gap-5 w-[100%]'> {

        Categories.map((data)=>{
 return <div className='w-[120px] h-[120px] bg-white flex flex-col   justify-center items-center text-[20px] font-semibold text-gray-600 hover:bg-green-200 cursor-pointer transition-all' onClick={()=>Filtercategory(data.name)}> <div>
{data.icon}
{data.name}
    </div>  </div>
})}
        </div>:null}
    
        <div className='w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-8 pb-8'>
           {Cate.length>=1 ?  Cate.map((item)=>(
                <Card name={item.food_name} image={item.food_image} price={item.price} id={item.id} type={item.food_type}/>
            )):<h1  className='text-center font-semibold text-2xl text-green-500 pt-5' >No dish found</h1>}

           
          
        </div>

        <div className={`w-full md:w-[30vw] h-full fixed top-0 right-0 bg-white p-5 flex flex-col items-center overflow-auto ${showcart?"translate-x-0":"translate-x-full"} `}>
            <header className='w-[100%] flex justify-between items-center'><span className='text-green-400 text-[18px] font-semibold'>order items</span>
            <span className='text-green-400 text-[24px] font-semibold cursor-pointer'><ImCross  onClick={()=>{
                setshowcart(false)
            }}/> </span ></header>

            {items.length>0 ? <><div className='w-full mt-8 flex flex-col gap- 3'>
            {items.map((item)=>(
<Card2 name={item.name} price={item.price} image={item.image}  id={item.id}  qty={item.qty}  ></Card2>
            ))}
            </div>
            <div className='w-full border-t-2 border-gray-500 mt-7 flex flex-col gap-1 p-2 border-b-2 '>
<div className='w-full flex justify-between items-center'>
    <span className='text-md text-gray-600 font-semibold'>subtotals</span>
    <span className='text-green-400 font-semibold text-lg'>Rs{subtotals}/-</span>
</div>
<div className='w-full flex justify-between items-center'>
    <span className='text-md text-gray-600 font-semibold'>Delivery Fee</span>
    <span className='text-green-400 font-semibold text-lg'>Rs{deliveryfee}/-</span>
</div>
<div className='w-full flex justify-between items-center'>
    <span className='text-md text-gray-600 font-semibold'>Taxes</span>
    <span className='text-green-400 font-semibold text-lg'>Rs{taxes}/-</span>
</div>

            </div>  
            <div className='w-full flex justify-between items-center p-6'>
    <span className='text-2xl text-gray-600 font-semibold'>Total</span>
    <span className='text-green-400 font-semibold text-2xl'>Rs{total}/-</span>
</div>
<button className='w-[80%] p-3 bg-green-600 rounded-lg text-white hover:bg-green-400 transition-all' onClick={ ()=>{
    toast.success("order placed")
}}>Place order</button>
</> 
  :<div className='text-center font-semibold text-2xl text-green-500 pt-5'> 
    Empty card buddy </div> 
          
}
        </div>
        </div>
  )
}

export default Home
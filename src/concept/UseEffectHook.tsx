import React, { useState } from 'react'
import HelloWorld from './HelloWorld'
// component mount on page      
// dom document object model
// html di javascript represent nu dom kehnde
const UseEffectHook = () => {
  const[ Visible ,setVisible]= useState( false)
  return (
    <div className='flex gap-8 p-3 justify-center items-center flex-col'> 
    <div className='space-x-8 p-4 m-9 text-center'>
    {   
   Visible ?<HelloWorld/>:<div/>}
   <button onClick={()=>{
    setVisible(true)
   }} className='text-gray-950 justify-center items-center bg-red-700 rounded-md m-9 '>
    Visible
   </button>
   <button onClick={()=>{
    setVisible(false)
   }} className='text-gray-950 justify-center items-center bg-red-700 rounded-md'>
    Hide
   </button>
   </div>
       </div> 
  )

}

export default UseEffectHook
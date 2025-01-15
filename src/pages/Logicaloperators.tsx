import React, { useState } from 'react'

const Logicaloperators = () => {
  const[flag ,setFlag]=useState(false);
  const[flag1 ,setFlag1]=useState(false);
  const[flag2 ,setFlag2]=useState(false);
  const[flag3 ,setFlag3]=useState(false);
  
  return (
    <div>
    <button
      onClick={() => {
        setFlag(!flag);
      }}
    >
      toggle ({flag ? "on" : "off"})
    </button>
    <button
      onClick={() => {
        setFlag1(!flag1);
      }}
    >
      toggle ({flag1? "on" : "off"})
    </button>
    <button
      onClick={() => {
        setFlag2(!flag2);
      }}
    >
      toggle ({flag2 ? "on" : "off"})
    </button>
    <button
      onClick={() => {
        setFlag3(!flag3);
      }}
    >
      toggle ({flag3 ? "on" : "off"})
    </button>
    {/* {flag ? (
      <div>Hello world from ternary operator (on)</div>
    ) : (
      <div>Hello world from ternary operator (off)</div>
    )} */}
   {/* && and operators */} 
   {!flag1 && <div className='text-6xl'> Hello world from And Operator flag 1 is off </div>}
   {/* {
    !flag && flag1 && flag2 &&flag3 && ( <div> Hello world from And Operator  </div>)
   } */}
   {flag1|| flag2||flag3||flag||(<div> HelloWorld from or operator </div> )  } 
     {/* nullish work on null and undefined */}


  </div>
);
} 

export default Logicaloperators
import {useState} from 'react'

const StateManagement = () => {
  const [state , setState]= useState(false);
  const backgroundcolor= state ? "bg-emerald-200 rounded-lg" : "bg-white rounded-lg "
  return (
    <div className= {backgroundcolor} >
    <div className='text-black text-8xl'> Hello from StateManagement {`${state}`} </div> <br></br> <br></br> 
     <div className='flex justify-center items-center space-x-3'> 
      <div className='rounded-md bg-black text-emerald-200 w-36 p-3' ><button onClick={()=>{
      setState(true)
    }}> make it true

    </button> </div>
    <div className='rounded-md bg-black text-emerald-200 w-36 p-3'><button onClick={()=>{
    setState(false)
   }}> make it false
   
   </button> </div>
    </div>
    </div>
  )
}

export default StateManagement
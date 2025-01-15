import {useState} from 'react'

const Event = () => {
  const[MouseIn , setMouseIn]=useState(false) ;
  const[ Text ,setText]= useState("");
  // const a= "hello-from-world"
  return (
    <div className=' flex flex-col gap-7 '>
      
      <div onClick={()=>{
        alert(new Date())
      }} className='w-96 h-52 bg-red-600 flex justify-center items-center  rounded-2xl'>
        <div className='text-center '>click on it</div>
       
   
      </div>
      <div onMouseEnter={()=>{
         alert("mouse entered")
         setMouseIn(true)
      }} onMouseLeave={()=>{
        alert("mouse out")
        setMouseIn(false)
      }} className='flex justify-center items-center  rounded-2xl bg-orange-500 w-96 h-52 '>
        <div>Mouse entered</div>
      </div>
      <div onMouseMove={()=>{
        alert( "mouse is moving" )
      }} className='flex justify-center items-center  rounded-2xl bg-lime-600  w-96 h-52 '>
        <div>show date</div>
        
        </div>
    <input
     className='flex justify-center items-center  rounded-2xl bg-orange-500 w-96 h-52 '
    onChange={(event) => {
     
      const value = event.target.value;
      setText(value);
    }}/>
        
     <div className='w-96 h-52 bg-red-600 flex justify-center items-center  rounded-2xl '>{Text}</div>
      <div></div>
    
    </div>
   
  )
}

export default Event
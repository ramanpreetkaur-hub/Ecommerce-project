import  { useEffect } from 'react'

const HelloWorld = () => {
   useEffect(()=>{
    alert("visible to hello world")
    return(()=>{
     alert("hide hello world")    
    })
   },[])









  return (
    <div>
     <div className='text-9xl text-gray-900 '>Hello world</div>
    </div>
  )
}

export default HelloWorld

import { useRef, useState } from 'react'

const Exercise1 = () => {
  const [state , sethover]= useState(false);
  const backgroundcolor=state ? "bg-emerald-200 rounded-lg" :"bg-white"
  const input1ref= useRef<HTMLInputElement>(null)
  
  const input2ref=useRef<HTMLInputElement> (null)
  const input3ref=useRef<HTMLInputElement> (null)
  return (
    <>
    
    <div>hello from exercise</div>
    <div className= {backgroundcolor}>
    <input  ref={input1ref} className='border text-4xl ' type="text " 
    
    />
    <button type="button" 
    onClick={()=>{
      sethover(true)
      input1ref.current?.select()
}
    
    }
    
     >on click</button > <br/>
    </div>
  
     <div>
    <input  ref={input2ref} className='border text-4xl ' type="text"  />
     <button type='button'
      onClick={()=>{
        input2ref.current?.focus()
      }}
     >hello</button>
     </div>
     <input ref={input3ref} type="text"  className='border text-4xl' />
     <button type='button'onClick={()=>{
      input3ref.current?.select();
     }}>raman</button>
    </>
  )
}

export default Exercise1
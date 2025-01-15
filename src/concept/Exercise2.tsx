import  { useRef } from 'react'

const Exercise2 = () => {
 const divref = useRef<HTMLDivElement>(null)  
 console.log(divref.current?.offsetHeight)
 console.log(divref.current?.offsetWidth)
  


 


  return (
    <div>
    <div ref={divref}>hello from exercise2</div>
   <div> div height { divref.current?.offsetHeight} </div>
   <div>  div width { divref.current?.offsetWidth} </div>
    
    </div>
  )
}

export default Exercise2
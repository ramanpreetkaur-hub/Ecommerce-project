import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEventListener } from 'usehooks-ts'
const Keybord = () => {
    const navigate=useNavigate()
useEventListener("keyup",(f)=>{
  console.log('keyup', f.key)




  if(f.key==="w"){
    navigate('/concept/Tailwind-task')
  }
  if (f.key==="m"){
    navigate("/concept/State-management")
  }

})


  return (
    <div>

hi


    </div>
  )
}

export default Keybord
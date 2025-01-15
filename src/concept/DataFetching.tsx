import  { useEffect, useState } from 'react'
import PostsCard from '../pages/PostsCard'
import  {getPostsData} from '../services/Posts.service'

const DataFetching = () => {
 
const[PostsDetails, setPostsDetails]= useState ([])  

console.log({getPostsData});
useEffect (()=>{

  getPostsData().then ((Posts)=>{

  setPostsDetails (Posts)
})
.catch((error)=>{
  console.log(error)
})
},[])

const Poststorender = PostsDetails .slice(0,10)
console.log('Poststorender', Poststorender)
  return (
   
    <div>    
      <div className="grid grid-cols-3">
     {Poststorender.map((Post)=>{
      return <PostsCard Post={Post}/>;
     }) }

</div>

    </div>
  )
}

export default DataFetching
import axios from "axios";
//  const getalbumsData = async() => { 
//   const response = await axios .get ("https://jsonplaceholder.typicode.com/albums") 
//   const albums = response.data
//   console.log(albums); 


//  }  
//  getalbumsData()

// const gettodosData = async () => {
//   const response = await axios.get("https://jsonplaceholder.typicode.com/todos")
//   const todos = response.data
//   const findtodos = todos.find(todos => todos.id === 3)
//   if (findtodos)
//     console.log(findtodos)
//   else

//     console.log("todos is not find")
// }
// gettodosData()
// const getusersData = async () => {
//   const response = await axios.get("https://jsonplaceholder.typicode.com/users")
//   const users = response.data
//   const findwithUsers = users.find(user => user.id === 2);
//   if (findwithUsers)
//     console.log(findwithUsers)
//   else
//     console.log("users not found")

// }

// getusersData()
export const getPostsData = async() => { 
  const response = await axios .get ("https://jsonplaceholder.typicode.com/Posts") 
  const Posts = response.data
    console.log(Posts) 
   };
   getPostsData ()

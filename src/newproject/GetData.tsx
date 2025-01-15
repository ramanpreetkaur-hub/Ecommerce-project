import React, { useState } from "react";
import { UseGrocery } from "./Customhook";
// import EcommerceBody from "./EcommerceBody";
// import EcommerceNav from "./EcommerceNav";

// const GetData = () => {
//   const [searchTerm, setSearchTerm] = useState(""); 
//   const { groceryData, loading, error } = UseGrocery(searchTerm); 

//   const handleSearch = (event: { target: { value: React.SetStateAction<string>; }; }) => {
//     setSearchTerm(event.target.value); 
//   };

  // return (
    // <div>
    //   <EcommerceNav searchTerm={searchTerm} handleSearch={handleSearch} />
      
    //   {loading && <p>Loading...</p>} 
    //   {error && <p style={{ color: "red" }}>Error: {error}</p>}
      
    //   {Array.isArray(groceryData) && groceryData.length > 0 ? (
    //     groceryData.map((grocery, index) => (
    //       <EcommerceBody key={index} grocery={grocery} />
    //     ))
    //   ) : (
    //     <p>No products found</p>
    //   )}
    // </div>
   
//   );
// };

// export default GetData;


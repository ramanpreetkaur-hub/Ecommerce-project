import React from "react";

import EcommerceNav from "./EcommerceNav";
import { Outlet } from "react-router-dom";


const Ecommerce = () => {

  return (
    <div>
    <EcommerceNav/>
    <Outlet/>

   
      
</div>

  );
};

export default Ecommerce;

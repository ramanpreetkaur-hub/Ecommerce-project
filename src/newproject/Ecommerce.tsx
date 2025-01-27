import React from "react";

import EcommerceNav from "./EcommerceNav";
import { Outlet } from "react-router-dom";
import Footer2 from "./Footer2";


const Ecommerce = () => {

  return (
    <div>
    <EcommerceNav/>
    <Outlet/>
   <Footer2/>
   
      
</div>

  );
};

export default Ecommerce;

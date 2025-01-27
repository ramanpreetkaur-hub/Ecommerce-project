
import { useEffect, useState, } from "react";
import { Pagination } from 'antd';
import Fashion from "./Fashion";
import Electronics from "./Electronics";
import Grocery from "./Grocery";
import HomeLiving from "./HomeLiving";
 import MyEcommerce from "./MyEcommerce"
const GetData = () =>   {
 

  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 1; 
   
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedCategories = categories.slice(startIndex, startIndex + itemsPerPage);

  // Fetch data from config.json
  useEffect(() => {
    fetch("/config.json")
      .then((response) => response.json())
      .then((data) => setCategories(data.categories))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  
    return (
      <div>
       
      <MyEcommerce/>
      {paginatedCategories.map((category) => {
        switch (category.name) {
          case "Fashion":
            return <Fashion key={category.name} categories={categories} />;
          case "Electronics":
            return <Electronics key={category.name} categories={categories} />;
          case "Grocery":
            return <Grocery key={category.name} categories={categories} />;
          case "HomeLiving":
            return <HomeLiving key={category.name} categories={categories} />;
          default:
            return null;
        }
      })}
 

      
        <div className="flex justify-center mt-8">
          <Pagination
            current={currentPage}
            pageSize={itemsPerPage}
            total={categories.length}
            onChange={(page) => setCurrentPage(page)}
            
          />
              
        </div>
      </div>

  
  );
};

export default GetData;





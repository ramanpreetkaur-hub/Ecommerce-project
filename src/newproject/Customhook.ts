import { useEffect, useState } from "react";
import { getgrocerydata } from "../services/Ecommercestore";

export const UseGrocery = (searchTerm) => {
  const [groceryData, setGroceryData] = useState([]); 
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    if (!searchTerm) return; 

    setLoading(true);
    setError(null); 

    getgrocerydata(searchTerm)
      .then((data) => {
        setGroceryData(data.products); 
      })
      .catch((err) => {
        setError(err.message ); 
      })
      .finally(() => {
        setLoading(false); 
      });
  }, [searchTerm]);

  return { groceryData, loading, error }; 
};




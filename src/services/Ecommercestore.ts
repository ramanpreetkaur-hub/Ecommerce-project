import axios from "axios";

export const getgrocerydata = async (searchTerm) => {
  try {
    const response = await axios.get(
         `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${searchTerm}`
   
    );
    return response.data;
  } catch (error) {
    console.error("Error in API :", error);
    throw error; 
  }
};
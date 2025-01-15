import axios from "axios";




export const getCharacterData = async (page= 1, limit=4) => {
  try {
    const response = await axios.get("https://api.jikan.moe/v4/top/anime?type=ona");
    const characters = response.data; 
   console.log('characters', characters)
   return { data: characters.data, pagination: characters.pagination };
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

getCharacterData();

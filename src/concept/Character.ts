import { useEffect, useState } from "react";
import { getCharacterData } from "../services/Jikan";

interface Anime {
  mal_id: number; // ID field based on Jikan API
  title: string; // Title of the anime
  [key: string]: any;
}

export const useCharacter = () => {
  const [animeDetails, setAnimeDetails] = useState<Anime[]>([]);
  const [pagination, setPagination] = useState({});
  const [loading, setLoading] = useState<boolean>(false);

  const fetchPage = async (page = 1) => {
    setLoading(true);
    const { data, pagination } = await getCharacterData(page);
    setAnimeDetails(data);
    setPagination(pagination);
    setLoading(false);
  };

  useEffect(() => {
    fetchPage(1); // Fetch first page on component mount
  }, []);

  return [animeDetails, pagination, loading, fetchPage];
};

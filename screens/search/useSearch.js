import { useEffect, useState } from "react";
import { getSearchResult } from "../../services/search";

export const useSearch = (route, navigation) => {
  const [resultList, setResultList] = useState([]);
  const [searchText, setSearchText] = useState("");

  const handleProgram = (media_type, id) => {
    navigation.navigate("Program", { media_type, id });
  };

  const handleSearch = (query) => {
    setResultList([]);
    navigation.navigate("Search", { query: query });
  };

  useEffect(() => {
    getSearchResult(route.params.query)
      .then((result) => {
        setResultList(result.results);
      })
      .catch((error) => {
        // setError(error);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [route]);

  return {
    resultList,
    handleProgram,
    searchText,
    setSearchText,
    handleSearch,
  };
};

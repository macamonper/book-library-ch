import { useState, useEffect } from "react";
import axios from "axios";

const useSearchBook = (searchValue) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${searchValue}`)
      .then((res) => {
        setResults(res.data.items);
      })
      .catch((err) => console.log(err));
  }, [searchValue]);

  return {
    results: results,
  };
};

export default useSearchBook;

import { useState, useEffect } from "react";
import axios from "axios";

const useGetBooks = (url) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setBooks(res.data.items);
      })
      .catch((err) => console.log(err));
  }, [url]);

  return {
    collection: books,
  };
};

export default useGetBooks;

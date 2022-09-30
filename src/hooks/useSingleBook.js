import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const useSingleBook = () => {
  const params = useParams();

  const [singleBook, setSingleBook] = useState([]);

  useEffect(() => {
    axios
      .get(`https://www.googleapis.com/books/v1/volumes/${params.id}`)
      .then((res) => {
        setSingleBook(res.data.volumeInfo);
      })
      .catch((err) => console.log(err));
  }, [params.id]);

  return {
    singleBook: singleBook,
  };
};

export default useSingleBook;

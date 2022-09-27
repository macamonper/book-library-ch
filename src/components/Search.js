import React from "react";
import { useParams } from "react-router";
import notAvailable from "../images/notAvailable.png";
import useSearchBook from "../hooks/useSearchBook";
import Card from "./cards/Card";

const Search = () => {
  const params = useParams();
  const booksSearched = useSearchBook(params.value);

  return (
    <div className="search-panel">
      <h1>Results found for {params.value}</h1>
      <div className="home">
        {booksSearched.results.map((book) => (
          <Card
            key={book.id}
            id={book.id}
            title={book.volumeInfo.title}
            cover={
              book.volumeInfo.imageLinks
                ? book.volumeInfo.imageLinks.smallThumbnail
                : notAvailable
            }
          ></Card>
        ))}
      </div>
    </div>
  );
};

export default Search;

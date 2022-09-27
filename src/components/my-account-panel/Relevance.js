import React from "react";
import { urlRelevant } from "../../auxiliars/variables";
import useGetBooks from "../../hooks/useGetBooks";
import RelevanceCard from "../cards/RelevanceCard";

export const Relevance = () => {
  const allBooks = useGetBooks(urlRelevant);

  return (
    <div className="relevanceContainer">
      <h3>Popular Books</h3>
      <div className="relevanceCards">
        {allBooks.collection.slice(0, 5).map((book) => (
          <RelevanceCard
            key={book.id}
            id={book.id}
            title={book.volumeInfo.title}
            cover={
              book.volumeInfo.imageLinks.smallThumbnail ||
              book.volumeInfo.imageLinks.thumbnail
            }
          ></RelevanceCard>
        ))}
      </div>
    </div>
  );
};

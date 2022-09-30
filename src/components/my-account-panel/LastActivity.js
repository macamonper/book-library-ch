import React from "react";
import { urlRelevant } from "../../auxiliars/variables";
import useGetBooks from "../../hooks/useGetBooks";
import RelevanceCard from "../cards/RelevanceCard";
import track from "../../images/track.jpg";

const LastActivity = () => {
  
  const allBooks = useGetBooks(urlRelevant);

  return (
    <div className="lastActivityCard">
      <div className="titleLastActivity">
        <span>
          <img src={track} alt="trending icon" />
        </span>
        <span>Last activity</span>
      </div>
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
export default LastActivity;

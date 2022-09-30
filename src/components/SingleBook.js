import React from "react";
import { useParams } from "react-router-dom";
import useSingleBook from "../hooks/useSingleBook";
import CardSingle from "./cards/CardSingle";
import NavBar from "./header/NavBar";
import notAvailable from "../images/notAvailable.png";

const SingleBook = () => {
  const params = useParams();
  const info = useSingleBook(params.id);
  return (
    <div>
      <NavBar />
      <CardSingle
        title={info.singleBook.title}
        cover={
          info.singleBook.imageLinks
            ? info.singleBook.imageLinks.smallThumbnail ||
              info.singleBook.imageLinks.thumbnail
            : notAvailable
        }
        authors={info.singleBook.authors}
        pageCount={info.singleBook.pageCount}
      ></CardSingle>
    </div>
  );
};

export default SingleBook;

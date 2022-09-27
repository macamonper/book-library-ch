import React from "react";
import { urlBase } from "../auxiliars/variables";
import useGetBooks from "../hooks/useGetBooks";
import Card from "./cards/Card";

const Home = () => {
  const allBooks = useGetBooks(urlBase);

  return (
    <div className="home">
      {allBooks.collection.map((book) => (
        <Card
          key={book.id}
          id={book.id}
          title={book.volumeInfo.title}
          author={book.authors}
          cover={
            book.volumeInfo.imageLinks.smallThumbnail ||
            book.volumeInfo.imageLinks.thumbnail
          }
        ></Card>
      ))}
    </div>
  );
};

export default Home;

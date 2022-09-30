import React from "react";
import { urlBase } from "../auxiliars/variables";
import useGetBooks from "../hooks/useGetBooks";
import Card from "./cards/Card";
import NavBar from "./header/NavBar";

const Home = () => {
  const allBooks = useGetBooks(urlBase);

  return (
    <React.Fragment>
      <NavBar />
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
    </React.Fragment>
  );
};

export default Home;

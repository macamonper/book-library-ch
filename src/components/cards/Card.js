import React from "react";
import { Link } from "react-router-dom";

const Card = ({ id, cover, title, pageCount, authors }) => {
  return (
    <Link to={`/single-book/${id}`}>
      <div className="card" id={id}>
        <div className="cover">
          <img src={cover} alt={title}></img>
        </div>
        <div>
          <p>{title}</p>
        </div>

        {authors ? (
          <div>
            Authors:
            {authors.map((author) => (
              <p>{author}</p>
            ))}
          </div>
        ) : (
          ``
        )}

        {pageCount ? (
          <div className="row">
            <p>Pages:{pageCount}</p>
          </div>
        ) : (
          ``
        )}
      </div>
    </Link>
  );
};

export default Card;

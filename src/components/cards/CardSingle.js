import React from "react";

const CardSingle = ({ id, cover, title, pageCount, authors }) => {
  return (
    <div className="cardSingle" id={id}>
      <div className="cover">
        <img src={cover} alt={title}></img>
      </div>
      <div className="row">
        <p>{title}</p>
      </div>

      {authors ? (
        <div>
          Authors:
          {authors.map((author) => (
            <p key={author}>{author}</p>
          ))}
        </div>
      ) : (
        ``
      )}

      {pageCount ? (
        <div>
          <p>Pages:{pageCount}</p>
        </div>
      ) : (
        ``
      )}
    </div>
  );
};

export default CardSingle;

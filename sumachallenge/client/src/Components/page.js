import React from "react";

export default function Pages({prevHandler, nextHandler, page}) {
  return (
    <div className="pages-container">
      <button className="pages pages-4" onClick={() => prevHandler()}>
        Prev
      </button>
      <div>
        <h2>{page}</h2>
      </div>
      <button className="pages pages-4" onClick={() => nextHandler()}>
        Next
      </button>
    </div>
  );
}

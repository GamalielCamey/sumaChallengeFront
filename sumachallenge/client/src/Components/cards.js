import React from "react";

function Cards({
  name,
  height,
  mass,
  hair_color,
  skin_color,
  eye_color,
  birth_year,
  gender,
  homeworld,
}) {
  return (
    <div className="cards">
      <div className="title">
        <h2>{name}</h2>
      </div>
    </div>
  );
}

export default Cards;

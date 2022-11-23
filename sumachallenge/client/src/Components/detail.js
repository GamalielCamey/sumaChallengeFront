import React from "react";
import {useSelector} from "react-redux";

const Detail = () => {
  let character = useSelector((state) => state.character);
  return (
    <div className="detai_container">
      <h1>{character.name}</h1>
      <p>Birth Year: {character.birth_year}</p>
      <p>{character.gender}</p>
      <div>
        <h3>Statistics</h3>
        <ul>
          <li>Height: {character.height}</li>
          <li>Mass: {character.mass}</li>
          <li>Eye color:{character.eye_color}</li>
          <li>Hair color:{character.hair_color}</li>
        </ul>
      </div>
    </div>
  );
};

export default Detail;

import React from "react";
import {getDetail} from "../actions";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";

function Cards({name, url}) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(getDetail(url));
  };

  console.log(url);
  return (
    <div className="cards">
      <div className="title">
        <h2>{name}</h2>
        <Link to="/detail">
          <button onClick={() => handleClick()}>Detail</button>
        </Link>
      </div>
    </div>
  );
}

export default Cards;

import React from "react";
import {getDetail} from "../actions";
import {useDispatch} from "react-redux";
import Button from "./button";

//* Individual cards layout

function Cards({name, url}) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(getDetail(url));
  };

  return (
    <div className=" w-full">
      <div className="block p-6 rounded-lg shadow-lg bg-neutral-800 h-full ">
        <h5 className="text-white text-xl leading-tight font-medium mb-2">
          {name}
        </h5>
        <div className="mt-16">
          <Button
            link={"/detail"}
            description="DETAIL"
            handleClick={() => handleClick()}
          />
        </div>
      </div>
    </div>
  );
}

export default Cards;

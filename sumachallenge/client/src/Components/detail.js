import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {clearDetail} from "../actions";
import Button from "./button";
import Loader from "./loader";

const Detail = ({toggleOpenModal}) => {
  let character = useSelector((state) => state.character);

  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(clearDetail());
    };
  }, [dispatch]);

  return (
    <div
      className="block rounded-lg shadow-lg px-6 py-12 
      bg-neutral-800 md:px-12 lg:-mr-14"
    >
      {!character || character.length === 0 ? (
        <div className="flex justify-center mt-7">
          <Loader />
        </div>
      ) : (
        <div>
          <h1 className="text-3xl font-bold mb-6 pb-2 text-white ">
            {character.name}
          </h1>
          <p className="text-white mb-6 pb-2">
            Birth Year: {character.birth_year}
          </p>
          <p className="text-white mb-6 pb-2">Gender: {character.gender}</p>
          <div>
            <h3 className="uppercase text-white mb-4 text-sm">Statistics</h3>
            <ul className="text-white">
              <li>Height: {character.height}</li>
              <li>Mass: {character.mass}</li>
              <li>Eye color:{character.eye_color}</li>
              <li>Hair color:{character.hair_color}</li>
            </ul>
          </div>
          <div className="mt-16">
            <Button description="BACK" link="/" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;

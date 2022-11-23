import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {getCharacterByName} from "../actions";
import svg from "../utils/star-wars.svg";

export default function NavBar() {
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  function handleChange(e) {
    e.preventDefault(e);
    setName(e.target.value);
    dispatch(getCharacterByName(name));
  }

  function handleSubmit(e) {
    e.preventDefault(e);
    if (!name) {
      alert("Please insert a Name");
    }
    dispatch(getCharacterByName(name));
  }

  if (name.length > 0) {
  }
  return (
    <div className="relative w-full flex flex-wrap items-center justify-between py-0 bg-black text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light">
      <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            className="
          form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
        "
            type="text"
            placeholder="Search Character"
            value={name}
            onChange={(e) => handleChange(e)}
          />
        </form>
        <img src={svg} alt="swLogo" />
      </div>
    </div>
  );
}

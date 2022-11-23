import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {getCharacterByName} from "../actions";

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
    <div>
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            placeholder="Search Character"
            value={name}
            onChange={(e) => handleChange(e)}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

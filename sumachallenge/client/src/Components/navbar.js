import React, {useState, useRef} from "react";
import {useDispatch} from "react-redux";

export default function NavBar() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const textInput = useRef(null);

  function handleChange(e) {
    e.preventDefault(e);
    const name = textInput.current.value;
    setName(name);
  }

  // function handleSubmit(e) {
  //   e.preventDefault(e);
  //   if (!name) {
  //     alert("Please insert a Name");
  //   }
  //   dispatch(getCharacterByName(name));
  // }

  return (
    <div>
      <div>
        <form>
          <input
            type="text"
            placeholder="Search Character"
            ref={textInput}
            value={name}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

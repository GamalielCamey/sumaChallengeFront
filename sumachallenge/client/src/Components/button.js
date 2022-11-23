import {Link} from "react-router-dom";

//* Button that takes props to add functionality

function Button({link, handleClick, description}) {
  return (
    <Link to={link}>
      <button
        onClick={handleClick}
        type="button"
        className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
      >
        {description}
      </button>
    </Link>
  );
}

export default Button;

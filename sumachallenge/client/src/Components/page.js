import React from "react";

export default function Pages({prevHandler, nextHandler, page}) {
  return (
    <div className="flex justify-center py-3">
      <button
        className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-white hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
        onClick={() => prevHandler()}
      >
        Prev
      </button>
      <ul>
        <li className="page-link relative block py-1.5 px-3 border-0 bg-blue-600 outline-none transition-all duration-300 rounded-full text-white hover:text-white hover:bg-blue-600 shadow-md focus:shadow-md">
          {page}
        </li>
      </ul>
      <button
        className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-white hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
        onClick={() => nextHandler(page)}
      >
        Next
      </button>
    </div>
  );
}

import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCharacters} from "../actions";
import Cards from "./cards";
import Loader from "./loader";
import NavBar from "./navbar";
import Pages from "./page";

//* Homepage with pagination component wich takes handlers as props to render the current page && adds functionality to the prev and next buttons

function Home() {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characters);
  const indexPage = Math.ceil(characters.length / 8);
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState({prev: 0, next: 8});

  const nextHandler = () => {
    if (characters.length <= pages.next) return;
    setPages({prev: pages.prev + 8, next: pages.next + 8});
    setCurrentPage(currentPage + 1);
  };

  const prevHandler = () => {
    if (pages.prev === 0) return;
    setPages({prev: pages.prev - 8, next: pages.next - 8});
    setCurrentPage(currentPage - 1);
  };

  let charactersPage;
  charactersPage = characters?.slice(pages.prev, pages.next);

  if (pages.next / indexPage > 8 && characters[0]) {
    setPages({prev: 0, next: 8});
    setCurrentPage(1);
  }

  useEffect(() => {
    dispatch(getCharacters());
  }, [dispatch]);

  return (
    <div className="bg-neutral-900">
      <NavBar />
      <Pages
        page={currentPage}
        prevHandler={prevHandler}
        nextHandler={nextHandler}
      />
      <div className="flex justify-center mt-7">
        {!characters.length && <Loader />}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5 h-screen">
        {charactersPage?.map((el, i) => {
          return (
            <div className="flex flex-nowrap justify-center ">
              <Cards name={el.name} url={el.url} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;

import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCharacters} from "../actions";
import Cards from "./cards";
import Pages from "./page";

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
    <div className="App">
      <Pages
        page={currentPage}
        prevHandler={prevHandler}
        nextHandler={nextHandler}
      />
      {charactersPage?.map((el, i) => {
        return (
          <div className="cards_container">
            <Cards className="card" name={el.name} url={el.url} />
          </div>
        );
      })}
    </div>
  );
}

export default Home;

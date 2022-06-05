import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { addFavouriteComic } from "../store/comic-slice";
import Mark from "./Mark";
import Spinner from "./Spinner";
import defaultCharacter from "../assets/defaultCharacter.jpg";
const Comics = () => {
  const [comics, setComics] = useState("");
  const dispatch = useDispatch();
  const comic = useSelector((state) => state.comic.comic);
  useEffect(() => {
    axios
      .get(
        `http://gateway.marvel.com/v1/public/comics?limit=30&ts=1&hash=${process.env.REACT_APP_HASH}&apikey=${process.env.REACT_APP_KEY}`
      )
      .then((response) => setComics(response.data.data.results));
  }, []);
  return (
    <main className="py-20">
      {comics ? (
        <section className="grid max-w-screen-xl lg:grid-cols-3 md:grid-cols-2 justify-center m-auto gap-4">
          {comics.map((item) => (
            <div key={item.id} className="bg-gray-300 rounded-md m-auto">
              <img
                className="rounded-t-md"
                onError={(e) => {
                  e.currentTarget.src = defaultCharacter;
                }}
                src={`${item.thumbnail.path}/standard_fantastic.jpg`}
                alt={item.name}
              />
              <div className="flex justify-between px-2 py-1 items-center">
                <h4>
                  {item.title.length > 22
                    ? item.title.substring(0, 22) + "..."
                    : item.title}
                </h4>
                <span onClick={() => dispatch(addFavouriteComic(item))}>
                  <Mark id={item.id} mark={comic} />
                </span>
              </div>
            </div>
          ))}
        </section>
      ) : (
        <Spinner />
      )}
    </main>
  );
};

export default Comics;

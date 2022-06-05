import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavouriteSerie } from "../store/serie-slice";
import defaultCharacter from "../assets/defaultCharacter.jpg";
import Mark from "./Mark";
import Spinner from "./Spinner";
const Series = () => {
  const dispatch = useDispatch();
  const [series, setSeries] = useState("");
  const serie = useSelector((state) => state.serie.serie);
  useEffect(() => {
    axios
      .get(
        `http://gateway.marvel.com/v1/public/series?limit=30&ts=1&apikey=${process.env.REACT_APP_KEY}`
      )
      .then((response) => setSeries(response.data.data.results));
  }, []);

  return (
    <main className="py-20">
      {series ? (
        <section className="grid max-w-screen-xl lg:grid-cols-3 md:grid-cols-2 justify-center m-auto gap-4">
          {series.map((item) => (
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
                <span onClick={() => dispatch(addFavouriteSerie(item))}>
                  <Mark id={item.id} mark={serie} />
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

export default Series;

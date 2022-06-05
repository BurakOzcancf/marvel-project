import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavouriteCreator } from "../store/creator-slice";
import Mark from "./Mark";
import defaultCharacter from "../assets/defaultCharacter.jpg";
import Spinner from "./Spinner";
const Creators = () => {
  const dispatch = useDispatch();
  const [creators, setCreators] = useState("");
  const creator = useSelector((state) => state.creator.creator);
  useEffect(() => {
    axios
      .get(
        `http://gateway.marvel.com/v1/public/creators?limit=30&ts=1&hash=${process.env.REACT_APP_HASH}&apikey=${process.env.REACT_APP_KEY}`
      )
      .then((response) => setCreators(response.data.data.results));
  }, []);

  return (
    <main className="py-20">
      {creators ? (
        <section className="grid max-w-screen-xl lg:grid-cols-3 md:grid-cols-2 justify-center m-auto gap-4">
          {creators.map((item) => (
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
                <h1>
                  {item.firstName.length > 22
                    ? item.firstName.substring(0, 22) + "..."
                    : item.firstName}
                </h1>
                <span onClick={() => dispatch(addFavouriteCreator(item))}>
                  <Mark id={item.id} mark={creator} />
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

export default Creators;

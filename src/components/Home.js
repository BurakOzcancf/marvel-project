import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addFavouriteCharacter } from "../store/character-slice";
import defaultCharacter from "../assets/defaultCharacter.jpg";
import { useSelector } from "react-redux";
import Spinner from "./Spinner";
import axios from "axios";
import Mark from "./Mark";
const Home = () => {
  const [limit, setLimit] = useState(30);
  const markCharacter = useSelector((state) => state.character.character);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [character, setCharacter] = useState("");
  const pageEnd = useRef();
  useEffect(() => {
    if (loading) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setLimit((a) => a + 15);
              setLoading(false);
              if (limit < 80) {
                observer.unobserve(pageEnd.current);
              }
            }
          });
        },
        { threshold: 1 }
      );
      observer.observe(pageEnd.current);
    }
  }, [limit, loading]);
  useEffect(() => {
    axios
      .get(
        `http://gateway.marvel.com/v1/public/characters?limit=${limit}&ts=1&apikey=${process.env.REACT_APP_KEY}`
      )
      .then((response) => {
        setCharacter(response.data);
        setLoading(true);
      });
  }, [limit]);
  return (
    <main className="py-20">
      {character ? (
        <section className="grid max-w-screen-xl lg:grid-cols-3 md:grid-cols-2 justify-center m-auto gap-4">
          {character.data.results?.map((item) => (
            <div key={item.id} className="bg-gray-300 rounded-md m-auto">
              <Link to={`/info/${item.id}`} key={item.id}>
                <img
                  className="rounded-t-md"
                  onError={(e) => {
                    e.currentTarget.src = defaultCharacter;
                  }}
                  src={`${item.thumbnail.path}/standard_fantastic.jpg`}
                  alt={item.name}
                />
              </Link>
              <div className="flex justify-between px-2 py-1 items-center">
                <h4>
                  {item.name.length > 22
                    ? item.name.substring(0, 22) + "..."
                    : item.name}
                </h4>
                <span onClick={() => dispatch(addFavouriteCharacter(item))}>
                  <Mark mark={markCharacter} id={item.id} />
                </span>
              </div>
            </div>
          ))}
        </section>
      ) : (
        <Spinner />
      )}
      <div ref={pageEnd} className="h-20"></div>
    </main>
  );
};

export default Home;

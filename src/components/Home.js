import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { getInfo } from "../store/character-slice";
import defaultCharacter from "../assets/defaultCharacter.jpg";
import axios from "axios";
const Home = () => {
  // const character = useSelector((state) => state.characters.character);
  // const dispatch = useDispatch();
  const [character, setCharacter] = useState("");
  useEffect(() => {
    axios
      .get(
        `http://gateway.marvel.com/v1/public/characters?limit=30&ts=1&apikey=${process.env.REACT_APP_KEY}`
      )
      .then((response) => setCharacter(response.data));
    // .then((response) => dispatch(getInfo(response.data)));
  }, []);
  console.log(character);
  return (
    <main>
      {character ? (
        <div className="grid max-w-screen-xl lg:grid-cols-3 md:grid-cols-2 justify-center m-auto gap-4">
          {character.data.results?.map((item) => (
            <div className="bg-slate-500 m-auto">
              <Link to={`/info/${item.id}`} key={item.id}>
                <img
                  onError={(e) => {
                    e.currentTarget.src = defaultCharacter;
                  }}
                  src={`${item.thumbnail.path}/standard_fantastic.jpg`}
                  alt={item.name}
                />
              </Link>
              <h4> {item.name}</h4>
            </div>
          ))}
        </div>
      ) : (
        "Burak"
      )}
    </main>
  );
};

export default Home;

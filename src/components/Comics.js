import axios from "axios";
import React, { useEffect, useState } from "react";
const Comics = () => {
  const [comics, setComics] = useState("");
  useEffect(() => {
    axios
      .get(
        `http://gateway.marvel.com/v1/public/comics?limit=30&ts=1&apikey=${process.env.REACT_APP_KEY}`
      )
      .then((response) => setComics(response.data.data.results));
  }, []);
  console.log(comics);
  return (
    <div>
      {comics &&
        comics.map((item) => (
          <div>
            <h1>{item.title}</h1>
            <img
              // onError={(e) => {
              //   e.currentTarget.src = defaultCharacter;
              // }}
              src={`${item.thumbnail.path}/standard_fantastic.jpg`}
              alt={item.name}
            />
          </div>
        ))}
    </div>
  );
};

export default Comics;

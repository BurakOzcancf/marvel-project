import axios from "axios";
import React, { useEffect, useState } from "react";
const Creators = () => {
  const [creators, setCreators] = useState("");
  useEffect(() => {
    axios
      .get(
        `http://gateway.marvel.com/v1/public/creators?limit=30&ts=1&apikey=${process.env.REACT_APP_KEY}`
      )
      .then((response) => setCreators(response.data.data.results));
  }, []);

  return (
    <div>
      {creators &&
        creators.map((item) => (
          <div>
            <h1>{item.firstName}</h1>
            <img
              // onError={(e) => {
              //   e.currentTarget.src = defaultCharacter;
              // }}
              src={`${item.thumbnail.path}/standard_fantastic.jpg`}
              alt={item.name}
            />
          </div>
        ))}{" "}
    </div>
  );
};

export default Creators;

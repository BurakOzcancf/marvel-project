import axios from "axios";
import React, { useEffect, useState } from "react";
const Stories = () => {
  const [stories, setStories] = useState("");
  useEffect(() => {
    axios
      .get(
        `http://gateway.marvel.com/v1/public/stories?limit=30&ts=1&apikey=${process.env.REACT_APP_KEY}`
      )
      .then((response) => setStories(response.data.data.results));
  }, []);

  return (
    <div>
      {stories &&
        stories.map((item) => (
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

export default Stories;

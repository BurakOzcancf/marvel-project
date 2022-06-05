import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import defaultCharacter from "../assets/defaultCharacter.jpg";
import Spinner from "./Spinner";
const Details = () => {
  const [characterDet, setCharacterDet] = useState("");
  const params = useParams();
  useEffect(() => {
    axios
      .get(
        `https://gateway.marvel.com:443/v1/public/characters/${params.id}?ts=1&apikey=${process.env.REACT_APP_KEY}&hash=${process.env.REACT_APP_HASH}`
      )
      .then((response) => setCharacterDet(response.data.data.results[0]));
  }, [params]);
  console.log(characterDet.events);
  return (
    <div className="py-20 px-10">
      {characterDet ? (
        <div className="max-w-3xl m-auto">
          <img
            className="m-auto rounded-sm"
            onError={(e) => {
              e.currentTarget.src = defaultCharacter;
            }}
            src={`${characterDet.thumbnail.path}/landscape_incredible.jpg`}
            alt={characterDet.name}
          />
          <h1 className="text-4xl font-bold text-center my-4">
            {characterDet.name}
          </h1>
          <h2 className="text-2xl font-medium px-10 my-4">About</h2>
          <p>{characterDet.description}</p>
          <h3 className="text-2xl mt-4 my-2">
            Comics which feature {characterDet.name}
          </h3>
          {characterDet.comics.items.map((item) => (
            <p className="px-4">{item.name}</p>
          ))}

          <h3 className="text-2xl mt-4 my-2">
            Stories in which {characterDet.name} appears
          </h3>
          {characterDet.stories.items.map((item) => (
            <p className="px-4">{item.name}</p>
          ))}
          <h3 className="text-2xl mt-4 my-2">
            Events in which {characterDet.name} appears
          </h3>
          {characterDet.events.items.map((item) => (
            <p className="px-4">{item.name}</p>
          ))}
          <h3 className="text-2xl mt-4 my-2">
            Series in which {characterDet.name} appears
          </h3>
          {characterDet.series.items.map((item) => (
            <p className="px-4">{item.name}</p>
          ))}
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default Details;

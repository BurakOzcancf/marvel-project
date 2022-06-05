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
        <div className="max-w-5xl m-auto">
          <img
            className="m-auto"
            onError={(e) => {
              e.currentTarget.src = defaultCharacter;
            }}
            src={`${characterDet.thumbnail.path}/landscape_incredible.jpg`}
            alt={characterDet.name}
          />
          <h1 className="text-3xl text-center">{characterDet.name}</h1>
          <h2 className="font-bold text-2xl">About</h2>
          <p>{characterDet.description}</p>
          <h2 className="font-bold text-2xl">
            Comics which feature {characterDet.name}
          </h2>
          {characterDet.comics.items.map((item) => (
            <h1>{item.name}</h1>
          ))}

          <h2 className="font-bold text-2xl">
            Stories in which {characterDet.name} appears
          </h2>
          {characterDet.stories.items.map((item) => (
            <h1>{item.name}</h1>
          ))}
          <h2 className="font-bold text-2xl">
            Events in which {characterDet.name} appears
          </h2>
          {characterDet.events.items.map((item) => (
            <h1>{item.name}</h1>
          ))}
          <h2 className="font-bold text-2xl">
            Series in which {characterDet.name} appears
          </h2>
          {characterDet.series.items.map((item) => (
            <h1>{item.name}</h1>
          ))}
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default Details;

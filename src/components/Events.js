import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addFavouriteEvent } from "../store/event-slice";
import Mark from "./Mark";
import defaultCharacter from "../assets/defaultCharacter.jpg";
import Spinner from "./Spinner";
const Events = () => {
  const [events, setEvents] = useState("");
  const dispatch = useDispatch();
  const event = useSelector((state) => state.event.event);
  useEffect(() => {
    axios
      .get(
        `http://gateway.marvel.com/v1/public/events?limit=30&ts=1&apikey=${process.env.REACT_APP_KEY}`
      )
      .then((response) => setEvents(response.data.data.results));
  }, []);

  return (
    <main className="py-20">
      {events ? (
        <section className="grid max-w-screen-xl lg:grid-cols-3 md:grid-cols-2 justify-center m-auto gap-4">
          {events.map((item) => (
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
                  {item.title.length > 22
                    ? item.title.substring(0, 22) + "..."
                    : item.title}
                </h1>
                <span onClick={() => dispatch(addFavouriteEvent(item))}>
                  <Mark id={item.id} mark={event} />
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

export default Events;

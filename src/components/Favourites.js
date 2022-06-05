import React from "react";
import defaultCharacter from "../assets/defaultCharacter.jpg";
import { Link } from "react-router-dom";
import { addFavouriteCharacter } from "../store/character-slice";
import { addFavouriteComic } from "../store/comic-slice";
import { addFavouriteCreator } from "../store/creator-slice";
import { addFavouriteEvent } from "../store/event-slice";
import { addFavouriteSerie } from "../store/serie-slice";
import { useDispatch, connect } from "react-redux";
import Mark from "./Mark";
const mapStateToProps = (state) => ({
  character: state.character.character,
  comic: state.comic.comic,
  creator: state.creator.creator,
  event: state.event.event,
  serie: state.serie.serie,
});
const Favourites = ({ character, comic, creator, event, serie }) => {
  const dispatch = useDispatch();

  return (
    <main className="py-20 max-w-7xl m-auto">
      <h1 className="text-center text-5xl font-medium">Favourites</h1>
      <ul>
        <li>
          {character[0] && (
            <h2 className="px-16 py-4 mt-8 my-2 text-2xl">Characters</h2>
          )}
          <div className="grid max-w-screen-xl xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 justify-center m-auto gap-4">
            {character.map((item) => (
              <div
                key={item.id}
                className="bg-gray-300 m-auto rounded-md w-fit"
              >
                <Link to={`/info/${item.id}`}>
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
                  <h1>
                    {item.name.length > 22
                      ? item.name.substring(0, 22) + "..."
                      : item.name}
                  </h1>
                  <span onClick={() => dispatch(addFavouriteCharacter(item))}>
                    <Mark mark={character} id={item.id} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </li>
        <li>
          {comic[0] && (
            <h2 className="px-16 py-4 my-2 mt-8 text-2xl">Comics</h2>
          )}
          <div className="grid max-w-screen-xl xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 justify-center m-auto gap-4">
            {comic.map((item) => (
              <div
                key={item.id}
                className="bg-gray-300 m-auto rounded-md w-fit"
              >
                <img
                  className="rounded-t-md"
                  onError={(e) => {
                    e.currentTarget.src = defaultCharacter;
                  }}
                  src={`${item.thumbnail.path}/standard_fantastic.jpg`}
                  alt={item.title}
                />
                <div className="flex justify-between px-2 py-1 items-center">
                  <h1>
                    {item.title.length > 22
                      ? item.title.substring(0, 22) + "..."
                      : item.title}
                  </h1>
                  <span onClick={() => dispatch(addFavouriteComic(item))}>
                    <Mark mark={comic} id={item.id} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </li>
        <li>
          {creator[0] && (
            <h2 className="px-16 py-4 mt-8 my-2 text-2xl">Creator</h2>
          )}
          <div className="grid max-w-screen-xl xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 justify-center m-auto gap-4">
            {creator.map((item) => (
              <div
                key={item.id}
                className="bg-gray-300 m-auto rounded-md w-fit"
              >
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
                    <Mark mark={creator} id={item.id} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </li>
        <li>
          {event[0] && (
            <h2 className="px-16 py-4 mt-8 my-2 text-2xl">Events</h2>
          )}
          <div className="grid max-w-screen-xl xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 justify-center m-auto gap-4">
            {event.map((item) => (
              <div
                key={item.id}
                className="bg-gray-300 m-auto rounded-md w-fit"
              >
                <img
                  className="rounded-t-md"
                  onError={(e) => {
                    e.currentTarget.src = defaultCharacter;
                  }}
                  src={`${item.thumbnail.path}/standard_fantastic.jpg`}
                  alt={item.title}
                />
                <div className="flex justify-between px-2 py-1 items-center">
                  <h1>
                    {item.title.length > 22
                      ? item.title.substring(0, 22) + "..."
                      : item.title}
                  </h1>
                  <span onClick={() => dispatch(addFavouriteEvent(item))}>
                    <Mark mark={event} id={item.id} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </li>
        <li>
          {serie[0] && (
            <h2 className="px-16 py-4 mt-8 my-2 text-2xl">Series</h2>
          )}
          <div className="grid max-w-screen-xl xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 justify-center m-auto gap-4">
            {serie.map((item) => (
              <div
                key={item.id}
                className="bg-gray-300 m-auto rounded-md w-fit"
              >
                <img
                  className="rounded-t-md"
                  onError={(e) => {
                    e.currentTarget.src = defaultCharacter;
                  }}
                  src={`${item.thumbnail.path}/standard_fantastic.jpg`}
                  alt={item.title}
                />
                <div className="flex justify-between px-2 py-1 items-center">
                  <h1>
                    {item.title.length > 22
                      ? item.title.substring(0, 22) + "..."
                      : item.title}
                  </h1>
                  <span onClick={() => dispatch(addFavouriteSerie(item))}>
                    <Mark mark={serie} id={item.id} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </li>
      </ul>
    </main>
  );
};

export default connect(mapStateToProps)(Favourites);

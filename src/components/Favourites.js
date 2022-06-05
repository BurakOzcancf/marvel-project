import React from "react";
import defaultCharacter from "../assets/defaultCharacter.jpg";
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
    <main className="py-20">
      <ul>
        <li>
          {character[0] && <h2>Characters</h2>}
          <div className="grid max-w-screen-xl xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 justify-center m-auto gap-4">
            {character.map((item) => (
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
                  <h1>{item.name}</h1>
                  <span onClick={() => dispatch(addFavouriteCharacter(item))}>
                    <Mark mark={character} id={item.id} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </li>
        <li>
          {comic[0] && <h2>Comics</h2>}
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
                  <h1>{item.title}</h1>
                  <span onClick={() => dispatch(addFavouriteComic(item))}>
                    <Mark mark={comic} id={item.id} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </li>
        <li>
          {creator[0] && <h2>Creator</h2>}
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
                  <h1>{item.firstName}</h1>
                  <span onClick={() => dispatch(addFavouriteCreator(item))}>
                    <Mark mark={creator} id={item.id} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </li>
        <li>
          {event[0] && <h2>Event</h2>}
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
                  <h1>{item.title}</h1>
                  <span onClick={() => dispatch(addFavouriteEvent(item))}>
                    <Mark mark={event} id={item.id} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </li>
        <li>
          {serie[0] && <h2>Series</h2>}
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
                  <h1>{item.title}</h1>
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

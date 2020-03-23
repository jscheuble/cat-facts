import React from "react";
import { useSelector } from "react-redux";

const Favorites = () => {
  const favorites = useSelector(state => state.favorites);
  console.log("FAVORITES", favorites);
  return (
    <div>
      <ul>
        {favorites.map((e, i) => {
          return <li key={i}>{e.text}</li>;
        })}
      </ul>
    </div>
  );
};

export default Favorites;

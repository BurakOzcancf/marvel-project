import React from "react";
import loading from "../assets/shield.png";
const Spinner = () => {
  return (
    <img
      className="rounded-t-md animate-spin w-60 m-auto"
      src={loading}
      alt={loading}
    />
  );
};

export default Spinner;

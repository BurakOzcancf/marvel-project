import React from "react";
import { BsBookmarkFill } from "react-icons/bs";
const Mark = ({ id, mark }) => {
  function deneme() {
    const a = [];
    mark.map((item) => a.push(item.id));
    if (a.includes(id)) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <>
      <BsBookmarkFill
        onClick={deneme}
        className="text-xl"
        style={
          deneme(id)
            ? {
                fill: "#ec1d24",
              }
            : { fill: "white" }
        }
      />
    </>
  );
};

export default Mark;

import React from "react";
import Card from "./card";

function Cards({ user, handelRemover }) {
  return (
    <div className="w-full h-[40vh] bg-zinc-400 flex justify-center items-center flex-wrap gap-5 overflow-auto">
      {user.map((item, index) => {
        return (
          <Card
            key={index}
            user={item}
            id={index}
            handelRemover={handelRemover}
          />
        );
      })}
    </div>
  );
}

export default Cards;

import React from "react";
import Part from "./Part";
import Total from "./Total";

function Content({ parts }) {
  return (
    <>
      <ul>
        {parts.map((part) => (
          <Part key={part.id} name={part.name} exercises={part.exercises} />
        ))}
      </ul>
      <Total parts={parts}/>
    </>
  );
}

export default Content;

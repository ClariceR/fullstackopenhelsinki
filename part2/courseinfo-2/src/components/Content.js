import React from "react";
import Part from "./Part";

function Content({ eachCourse }) {
  console.log("eachCourse:", eachCourse);
  return (
    <div>
      <ul>
        {eachCourse.map((part) => (
          <Part key={part.id} name={part.name} exercise={part.exercises} />
        ))}
      </ul>
    </div>
  );
}

export default Content;

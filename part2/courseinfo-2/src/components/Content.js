import React from "react";
import Part from "./Part";

function Content({eachCourse}) {
    console.log('eachCourse:', eachCourse)
  return (
    <div>
      <Part name={eachCourse[0].name} exercise={eachCourse[0].exercises}/>
    </div>
  );
}

export default Content;

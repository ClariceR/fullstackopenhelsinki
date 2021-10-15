import React from "react";
import Content from "./Content";
import Header from "./Header";

// const Total = ({ course }) => {
//   const sum =
//     course.parts[0].exercises +
//     course.parts[1].exercises +
//     course.parts[2].exercises;
//   return <p>Number of exercises {sum}</p>;
// };

function Course({ course }) {
  
  return (
    <>
      <Header course={course} />
      <Content eachCourse={course.parts} />
    </>
  );
}

export default Course;

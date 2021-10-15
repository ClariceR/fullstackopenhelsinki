import React from "react";

function Total({ parts }) {
  const numExercises = [];
  parts.map((part) => numExercises.push(part.exercises));

  const total = numExercises.reduce((s, c) => s + c, 0);

  return (
    <>
      <h4>Total of {total} exercises</h4>
    </>
  );
}

export default Total;

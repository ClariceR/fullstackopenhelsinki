import React from "react";
import Contact from "./Contact";

function Contacts({ persons, toSearch }) {
  return (
    <ul>
      {persons
        .filter((person) => {
          if (toSearch === "") {
            return person;
          } else if (
            person.name
              .toLocaleLowerCase()
              .includes(toSearch.toLocaleLowerCase())
          ) {
            return person;
          }
        })
        .map((person) => (
          <Contact person={person} />
        ))}
    </ul>
  );
}

export default Contacts;

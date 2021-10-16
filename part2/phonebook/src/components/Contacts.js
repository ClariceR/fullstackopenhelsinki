import React from "react";
import Contact from "./Contact";

function Contacts({ persons, toSearch }) {
  const findPerson = (person) => {
    if (person.name.toLowerCase().includes(toSearch.toLowerCase())) {
      return person;
    }
  };
  return (
    <ul>
      {persons.filter(findPerson).map((person) => (
        <Contact key={person.id} person={person} />
      ))}
    </ul>
  );
}

export default Contacts;

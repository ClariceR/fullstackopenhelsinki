import React from "react";

function Contact({ person }) {
  return (
    <li key={person.id}>
      {person.name}: {person.number}
    </li>
  );
}

export default Contact;

import React from "react";

function Contact({ person }) {
  return (
    <li>
      {person.name}: {person.number}
    </li>
  );
}

export default Contact;

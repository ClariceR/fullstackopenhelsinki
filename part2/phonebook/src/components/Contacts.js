import React from 'react'

function Contacts({persons, toSearch}) {
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
            <li key={person.id}>
              {person.name}: {person.number}
            </li>
          ))}
      </ul>
    );
}

export default Contacts

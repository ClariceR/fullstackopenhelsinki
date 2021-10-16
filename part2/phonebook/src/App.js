import "./App.css";
import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [toSearch, setToSearch] = useState("");
  // const [toDisplay, setToDisplay] = useState(persons);

  const handleName = (e) => setNewName(e.target.value);
  const handleNumber = (e) => setNewNumber(e.target.value);
  const handleSearch = (e) => setToSearch(e.target.value);

  // const found = persons.filter((person) => person.name.includes(toSearch));
  // console.log(found);
  // setToDisplay(found);

  const addName = (e) => {
    e.preventDefault();

    if (newName.length > 0) {
      const personObject = {
        name: newName,
        number: newNumber,
        id: Math.random().toFixed(6),
      };
      persons.filter((person) => person.name === newName).length > 0
        ? alert(`${newName} is already in the Phonebook`)
        : setPersons(persons.concat(personObject));
    } else {
      alert(`Fields cannot be empty`);
    }
    setNewName("");
    setNewNumber("");
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <div>
        Search: <input value={toSearch} onChange={handleSearch} />
      </div>
      <h2>Add New Contact</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleName} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Contacts</h2>
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
    </div>
  );
};

export default App;

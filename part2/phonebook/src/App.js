import "./App.css";
import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const handleInput = (e) => setNewName(e.target.value);

  const addName = (e) => {
    e.preventDefault();

    if (newName.length > 0) {
      const personObject = {
        name: newName,
      };
      persons.filter((person) => person.name === newName).length > 0
        ? alert(`${newName} is already in the Phonebook`)
        : setPersons(persons.concat(personObject));
    } else {
      alert(`Please enter a new name`);
    }
    setNewName("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleInput} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <li key={person.name}>{person.name}</li>
        ))}
      </ul>
      <div>debug: {newName}</div>
    </div>
  );
};

export default App;

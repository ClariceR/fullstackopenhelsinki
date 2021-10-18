import "./App.css";
import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import AddForm from "./components/AddForm";
import Contacts from "./components/Contacts";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [toSearch, setToSearch] = useState("");

  useEffect(() => {
    axios
    .get('http://localhost:3001/persons')
    .then((response) => {
      setPersons(response.data)
    })
  }, [])

  const handleName = (e) => setNewName(e.target.value);
  const handleNumber = (e) => setNewNumber(e.target.value);
  const handleSearch = (e) => setToSearch(e.target.value);

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
      <Search toSearch={toSearch} handleSearch={handleSearch} />
      <h2>Add New Contact</h2>
      <AddForm
        addName={addName}
        newName={newName}
        newNumber={newNumber}
        handleName={handleName}
        handleNumber={handleNumber}
      />
      <h2>Contacts</h2>
      <Contacts persons={persons} toSearch={toSearch} />
    </div>
  );
};

export default App;

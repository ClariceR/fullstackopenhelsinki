import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [countries, setCountries] = useState([]);
  const [toSearch, setToSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => setCountries(response.data));
  }, []);

  const handleChange = (e) => setToSearch(e.target.value);

  return (
    <div className="App">
      <form>
        <p>Search for countries</p>
        <input value={toSearch} onChange={handleChange} />
      </form>
    </div>
  );
}

export default App;

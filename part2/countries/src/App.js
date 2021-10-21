import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Countries({ countries, toSearch }) {
  const findCountry = (country) => {
    console.log(country)
    if (country.name.official.toLowerCase().includes(toSearch.toLowerCase())) {
      return country;
    }
  };
  const filteredList = countries.filter(findCountry);
  return (
    <ul>
      {filteredList.map((country) => (
        <li key={country.name.official}>{country.name.official}</li>
      ))}
    </ul>
  );
}

function App() {
  const [countries, setCountries] = useState([]);
  const [toSearch, setToSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => setCountries(response.data));
  }, []);

  const handleSearch = (e) => setToSearch(e.target.value);

  return (
    <div className="App">
      <form>
        <p>Search for countries</p>
        <input value={toSearch} onChange={handleSearch} />
      </form>
      <Countries countries={countries} toSearch={toSearch} />
    </div>
  );
}

export default App;

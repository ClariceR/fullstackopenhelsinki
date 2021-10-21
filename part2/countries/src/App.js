import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function IntroMessage () {
  return <p>Search for Countries</p>
}

function HelperMessage () {
  return <p>Too many results. Enter more characters.</p>
}

function Country ({country}) {
  return <li>{country.name.official}</li>;
}

function Countries({
  countries,
  toSearch,
  limit,
  setLimit,
}) {
  const findCountry = (country) => {
    if (country.name.official.toLowerCase().includes(toSearch.toLowerCase())) {
      return country;
    }
  };
  const filteredList = countries.filter(findCountry);
  
  
  return (
    <ul>
      {toSearch.length > 0 && filteredList.length > 10 && <HelperMessage />}
      {filteredList.length <= 10 &&
        filteredList.map((country) => {
          return <Country key={Math.random().toString(16)} country={country} />;
        })}
    </ul>
  );
}

function App() {
  const [countries, setCountries] = useState([]);
  const [toSearch, setToSearch] = useState("");
  const [limit, setLimit] = useState(10);

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
      <Countries
        countries={countries}
        toSearch={toSearch}
        limit={limit}
        setLimit={setLimit}
      />
    </div>
  );
}

export default App;

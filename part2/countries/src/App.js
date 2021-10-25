import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function DisplayResults({ filteredData, setSearchTerm }) {
  if (filteredData.length === 1) {
    const languagesObj = { ...filteredData[0].languages };
    const languages = [];
    for (const key in languagesObj) {
      languages.push(languagesObj[key]);
    }
    const flagsObj = { ...filteredData[0].flags };
    return (
      <div>
        <h2>
          {filteredData[0].name.common} {filteredData[0].flag}
        </h2>
        <p>Oficial name: {filteredData[0].name.official}</p>
        <p>Capital: {filteredData[0].capital}</p>
        <p>Population: {filteredData[0].population}</p>
        <ul>
          Language(s):{" "}
          {languages.map((language) => (
            <li key={language}>{language}</li>
          ))}
        </ul>
        <br />
        <img src={flagsObj.png} alt="Country's official flag" />
      </div>
    );
  }

  if (filteredData.length > 10)
    return <p>Too many results. Enter more characters.</p>;

  return (
    <ul>
      {filteredData.map((country) => (
        <li key={country.name.official}>
          {country.name.common}{" "}
          <button
            value={country.name.common}
            onClick={(e) => setSearchTerm(e.target.value)}
          >
            show
          </button>
        </li>
      ))}
    </ul>
  );
}

function App() {
  const [countriesData, setCountriesData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => setSearchTerm(e.target.value);
  const filteredData = countriesData.filter((country) =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => setCountriesData(response.data));
  }, []);
  return (
    <div className="App">
      <h3>Search for Countries</h3>
      <input value={searchTerm} onChange={handleSearch} />
      <DisplayResults
        filteredData={filteredData}
        setSearchTerm={setSearchTerm}
      />
    </div>
  );
}

export default App;

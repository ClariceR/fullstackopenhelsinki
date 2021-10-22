import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function CountryDetails({ country }) {
  const languagesObj = { ...country.languages };
  const languages = [];
  for (const key in languagesObj) {
    languages.push(languagesObj[key]);
  }

  const flagsObj = { ...country.flags };

  return (
    <div>
      <h2>
        {country.name.common} {country.flag}
      </h2>
      <p>Oficial name: {country.name.official}</p>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population}</p>
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

function HelperMessage() {
  return <p>Too many results. Enter more characters.</p>;
}

function ShowDetailsButton({ setShow }) {
  return (
    <button
      onClick={() => {
        setShow(true);
      }}
    >
      Show
    </button>
  );
}

function Country({ country, show, setShow }) {
  return (
    <>
      <li>{country.name.common}</li>
      <ShowDetailsButton setShow={setShow} country={country}/>
    </>
  );
}

function Countries({ countries, toSearch, show, setShow }) {
  const limit = 10;
  const findCountry = (country) => {
    if (country.name.official.toLowerCase().includes(toSearch.toLowerCase())) {
      return country;
    }
  };
  const filteredList = countries.filter(findCountry);

  return (
    <ul>
      {toSearch.length > 0 && filteredList.length > limit && <HelperMessage />}
      {filteredList.length === 1 &&
        filteredList.map((country) => {
          return (
            <CountryDetails key={country.name.official} country={country} />
          );
        })}
      {filteredList.length > 1 &&
        filteredList.length <= limit &&
        filteredList.map((country) => {
          return (
            <Country
              key={country.name.official}
              country={country}
              show={show}
              setShow={setShow}
            />
          );
        })}
      {show &&
        filteredList.map((country) => {
          return (
            <CountryDetails key={country.name.official} country={country} />
          );
        })}
    </ul>
  );
}

function App() {
  const [countries, setCountries] = useState([]);
  const [toSearch, setToSearch] = useState("");
  const [show, setShow] = useState(false);

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
        show={show}
        setShow={setShow}
      />
    </div>
  );
}

export default App;

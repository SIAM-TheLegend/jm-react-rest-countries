import { useEffect, useState } from "react";
import Country from "./Country";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedCountries = (country) => {
    const newlyVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newlyVisitedCountries);
    console.log(visitedCountries);
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "60%" }}>
        <h2 style={{ textAlign: "center" }}>Country Count: {countries.length}</h2>
        {countries.map((country) => (
          <Country key={country.name.common} country={country} handleVisitedCountries={handleVisitedCountries} />
        ))}
      </div>
      <div style={{ width: "40%" }}>
        <h2 style={{ textAlign: "center" }}>Visited Country: {visitedCountries.length}</h2>
        {visitedCountries.map((visitedCountry) => (
          <li>{visitedCountry.name.common}</li>
        ))}
      </div>
    </div>
  );
};

export default Countries;

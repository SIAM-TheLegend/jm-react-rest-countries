import { useEffect, useState } from "react";
import Country from "./Country";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div style={{ width: "50%", margin: "0 auto" }}>
      <h2 style={{ textAlign: "center" }}>Country Count: {countries.length}</h2>
      {countries.map((country) => (
        <Country key={country.name.common} country={country} />
      ))}
    </div>
  );
};

export default Countries;

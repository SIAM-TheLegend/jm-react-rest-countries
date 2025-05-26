import { useState } from "react";
import "./Country.css";

const Country = ({ country, handleVisitedCountries }) => {
  const [visited, setVisited] = useState(false);
  const { name, flags } = country;

  const handleVisited = () => {
    setVisited(!visited);
  };

  // console.log(country);
  return (
    <div style={{ background: visited ? "gray" : "transparent" }} className="country">
      <div>
        <p>
          Name: <b style={{ fontSize: "20px" }}>{name.common}</b>
        </p>
        <button
          onClick={() => {
            handleVisitedCountries(country);
          }}
        >
          {visited ? "Visited" : "Mark as Visited"}
        </button>
        <br />
        <button onClick={handleVisited}>{visited ? "Visited" : "Visit Now"}</button>
      </div>
      <div>
        <img src={flags?.png} alt={flags?.alt} />
      </div>
    </div>
  );
};

export default Country;

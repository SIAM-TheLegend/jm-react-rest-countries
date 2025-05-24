import { useState } from "react";
import "./Country.css";

const Country = ({ country }) => {
  const [visited, setVisited] = useState(false);
  const { name, flags } = country;
  const handleVisited = () => {
    setVisited(!visited);
  };

  // console.log(country);
  return (
    <div className="country">
      <div>
        <p>
          Name: <b style={{ fontSize: "20px" }}>{name.common}</b>
        </p>
        <button onClick={handleVisited}>{visited ? "Visited" : "Visit Now"}</button>
      </div>
      <div>
        <img src={flags?.png} alt={flags?.alt} />
      </div>
    </div>
  );
};

export default Country;

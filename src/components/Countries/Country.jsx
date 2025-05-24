import "./Country.css";

const Country = ({ country }) => {
  console.log(country);
  const { name, flags } = country;
  return (
    <div className="country">
      <div>
        <p>
          Name: <b style={{ fontSize: "20px" }}>{name.common}</b>
        </p>
      </div>
      <div>
        <img src={flags?.png} alt={flags?.alt} />
      </div>
    </div>
  );
};

export default Country;

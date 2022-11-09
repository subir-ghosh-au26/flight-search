import React from "react";
import "./Result.css";

function Result(props) {
  const { data } = props;
  console.log(props);

  return (
    <div className="Item">
      <div className="Item-left">
        <h5>Rs. {data.price}</h5>
        <div>{data.name}</div>
        <div className="Item-price">
          {data.originCity} > {data.destinationCity}{" "}
        </div>
        <div className="Item-description">Depart: {data.departureDate}</div>
        <div className="Item-description">DepartTime: {data.departureTime}</div>
      </div>

      <div className="Item-right">
        <div className="Item-image">
          <img
            src="https://www.india.com/wp-content/uploads/2021/10/Flights.png"
            className="Item-logo"
            alt="logo"
          />
        </div>
        <button className="Item-book" onClick={book} type="submit">
          Book this flight
        </button>
      </div>
    </div>
  );

  function book() {
    alert("Flight book sucessfully");
  }
}

export default Result;

import React, { useState } from "react";
import DatePicker from "react-date-picker";

const OneWay = () => {
  const [value, onChange] = useState();

  return (
    <div className="FirstTab">
      <input type="text" placeholder="Enter Origin City" />
      <input type="text" placeholder="Enter Destination City" />
      <DatePicker
        onChange={onChange}
        value={value}
        placeholderText="Deperture Date"
      />
      <input type="text" placeholder="Passenger" />
      <br />
      <button className="btn btn-primary mx-5">Search</button>
    </div>
  );
};
export default OneWay;

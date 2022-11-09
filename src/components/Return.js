import React, { useState } from "react";
import DatePicker from "react-date-picker";

const Return = () => {
  const [value, onChange] = useState();

  return (
    <div className="SecondTab">
      <input type="text" placeholder="Enter Origin City" />
      <input type="text" placeholder="Enter Destination City" />
      <DatePicker
        onChange={onChange}
        value={value}
        placeholderText="Deperture Date"
      />
      <DatePicker
        onChange={onChange}
        value={value}
        placeholderText="Return Date"
      />
      <input type="text" placeholder="Passenger" />
      <br />
      <button className="btn btn-primary mx-5">Search</button>
    </div>
  );
};
export default Return;

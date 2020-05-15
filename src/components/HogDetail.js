import React from "react";

const HogDetail = (props) => {
  return (
    <div>
      <h3>Pig Details:</h3>
      <p>Specialty: {props.pig.specialty}</p>
      <p>Greased: {props.pig.greased ? "true" : "false"}</p>
      <p>Weight: {props.pig.weight}</p>
    </div>
  );
};

export default HogDetail;

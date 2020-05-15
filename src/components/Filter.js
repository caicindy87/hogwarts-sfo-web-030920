import React from "react";

const Filter = (props) => {
  return (
    <div>
      Filter:
      <select className="filterWrapper" onChange={(e) => props.onChangeType(e)}>
        <option value="all">All</option>
        <option value="greased">Greased</option>
      </select>
      <br />
      Sort:
      <select className="filterWrapper" onChange={(e) => props.onSort(e)}>
        <option value=""></option>
        <option value="name">Name</option>
        <option value="weight">Weight</option>
      </select>
    </div>
  );
};

export default Filter;

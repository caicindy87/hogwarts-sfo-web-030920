import React, { Component } from "react";

const Gif = (props) => {
  return <img className="gif" src={props.gifUrl}></img>;
};

export default Gif;

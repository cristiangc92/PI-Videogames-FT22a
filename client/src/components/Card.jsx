import React from "react";

export default function Card({ name, image, genres }) {
  return (
    <div>
      <h2>{name}</h2>
      <img src={image} alt="img not found" width="400px" height="224px" />
      <h5>{genres}</h5>
    </div>
  );
}

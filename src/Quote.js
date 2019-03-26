import React from "react";

const Quote = ({ country, city, image }) => (
    <figure>
        
        <h1>{city}</h1>
        <img src={image} alt={city} />
        <p>{country}</p>
        <hr></hr>
    </figure>
);

export default Quote;
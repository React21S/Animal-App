import React from 'react';
import {Link, useRouteMatch} from "react-router-dom"


const AnimalsBox = (animal) => {
    const match = useRouteMatch();
 
    return (
        <div className="box">
            <h2>{animal.name.toUpperCase()}</h2>
            <img src={`https://source.unsplash.com/1600x900/?${animal.name}`} alt = "animal"/>
            <Link to={`${match.url}/${animal.name}`}>Read more</Link>

        </div>
    );
};


export default AnimalsBox;
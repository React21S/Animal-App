import React from 'react';


const AnimalsBox = (animal) => {
    return (
        <div className="box">
            <h2>{animal.name.toUpperCase()}</h2>
            <img src={`https://source.unsplash.com/user/erondu/1600x900/?${animal.name}`}/>
        </div>
    );
};


export default AnimalsBox;
import React from 'react';
import { useParams } from 'react-router';

const AnimalSingle = () => {
    let {animal} = useParams();
    return (
        <div>
            <h2>This is the page for {animal}</h2>
        </div>
    );
};

export default AnimalSingle;
import React from 'react';
import { useParams, useHistory} from 'react-router';
import { animals } from "./animals";





const AnimalSingle = () => {

    let {animal} = useParams();
    let history = useHistory();
  
    return (
        <div className="singleAnimal">
            <h2>This is the page for {animal} </h2> 
            <img src={`https://source.unsplash.com/1600x900/?${animal.name}`} alt = "animal"/>
            <div>
                <button onClick={()=> history.goBack("/")}>Back to animals</button>
            </div>
        </div>
    );
};

export default AnimalSingle;
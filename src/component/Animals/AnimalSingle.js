import React from 'react';
import { useParams, useHistory} from 'react-router';

const AnimalSingle = () => {

    let {animal} = useParams();
    let history = useHistory();
  
    return (
        <div className="singleAnimal">
           <div className="result">
           <h2>This is the {animal} page</h2> 
            <img src={`https://source.unsplash.com/1600x900/?${animal}`} alt = "animal"/>
            <div>
                <button onClick={()=> history.goBack("/")}>Back to animals</button>
            </div>
           </div>
        </div>
    );
};

export default AnimalSingle;
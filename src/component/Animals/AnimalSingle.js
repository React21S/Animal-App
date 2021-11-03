import React from 'react';
import { useParams, useHistory} from 'react-router';


const AnimalSingle = () => {
    let {animal, img} = useParams();
    let history = useHistory();
  
    return (
        <div className="singleAnimal">
            <h2>This is the page for {animal}{" "}</h2>
            <div> this image {img}</div>
            <div>
                <button onClick={()=> history.goBack("/")}>Back to animals</button>
            </div>
        </div>
    );
};

export default AnimalSingle;
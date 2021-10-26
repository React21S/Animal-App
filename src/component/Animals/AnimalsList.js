import { animals } from './animals';
import AnimalsBox from './AnimalsBox';
import React from 'react';


const AnimalsList = () => {
    return (
        <div>
             
      {animals.map((item) => (<div>
      <AnimalsBox key={item.id} name={item.name}/>
      </div>
      ))}
     
        </div>
    );
};

export default AnimalsList;
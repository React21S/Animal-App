import { animals } from "./animals";
import AnimalsBox from "./AnimalsBox";
import React from "react";
import { Switch, Route, useRouteMatch } from 'react-router';
import AnimalSingle from "./AnimalSingle"


const AnimalsList = () => {
  const match = useRouteMatch();
  const animalsListing =  animals.map((item) => (
    <AnimalsBox key={item.name} name={item.name}/>));


    return (
      
        <div className="animalsList">
          <Switch>
            <Route exact path ={match.path}>{animalsListing}</Route>
            <Route path ={`${match.path}/:animal`}> <AnimalSingle/></Route>
          </Switch>
             
      
        </div>
    );
};

export default AnimalsList;

// If I want to use this one I need to change the name in Main to AnimalsListA (import AnimalsList from "./Animals/AnimalsListA";)
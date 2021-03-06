import AnimalsList from "./Animals/AnimalsList";
import React from 'react';

import Home from './Home'
import About from './About'
import { Switch, Route} from 'react-router-dom';


const Main = () => {
    return (
    <Switch>
        <Route path = "/" exact component={Home}/>
        <Route  path = "/animals"   component={AnimalsList}/>
        <Route exact path = "/about" component={About}/>
    </Switch>    
       
    );
};

export default Main;


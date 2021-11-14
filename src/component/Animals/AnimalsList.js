import React, { Component } from 'react';
import { animals } from "./animals";
import AnimalsBox from "./AnimalsBox";
import { Switch, Route} from 'react-router';
import AnimalSingle from "./AnimalSingle";


class AnimalsList extends Component {
  state = {
    searchInput:"",
  }


  searchInputHandler=(event)=>{
    this.setState({searchInput:event.target.value});
  };
    

  render() {

    const animalFilter = animals.filter(animal=>{
      return animal.name.toLowerCase().includes(this.state.searchInput.toLowerCase())
    });

    const animalsListing =  animalFilter.map((item) => (
    <AnimalsBox key={item.name} name={item.name}/>));

    return (
      <div className="animalsList">
         <main>
          <Switch>
            
            <Route exact path ={this.props.match.path}>
            <div className="search"><label htmlFor="animal">Animal search
              <input name = "animal" type="text" onChange={this.searchInputHandler} placeholder="Type animal's name"/></label></div>
              {animalsListing}</Route>
            
            <Route path ={`${this.props.match.path}/:animal`}><AnimalSingle/></Route>
          </Switch>
        </main>
      </div>
    );
  }
}

export default AnimalsList;




import React, { Component } from 'react';
import logo from './logo.svg';
import {CardList} from './Components/Card-list/card-list.component'
import {SearchBox} from './Components/Search-Box/search-box.component'
import './App.css';

class App extends Component {
  
  constructor(){

    super();
this.state={
monsters:[],
Searchfield:''
}
    
  }
  
  componentDidMount(){

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response => Response.json())
    .then(users => this.setState({monsters:users}))
  }
  
  handlechange= e => this.setState({Searchfield:e.target.value})

  render()
  {
    const {monsters,Searchfield}=this.state;
 const FilteredMonsters=monsters.filter(monster =>
  monster.name.toLowerCase().includes(Searchfield.toLowerCase()))

    return (
      <div className="App">
        <h1> MONSTERS</h1>
       <SearchBox
        placeholder='search monster'
        handlechange= {e => this.setState({Searchfield:e.target.value})}
       
       />

        <CardList monsters={FilteredMonsters} 
        />
        
      
       
      </div>
    );
  }
  
}

export default App;

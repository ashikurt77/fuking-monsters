import React from 'react';
import {CardList} from './Components/CardList/CardList.component';
import {SearchField} from './Components/SearchField/SearchField.component';
import './App.css';
class App extends React.Component{

  constructor(){

    super();

    this.state={
      monsters : [],
      searchBox: ''
    }
  }

  componentDidMount = () =>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState( { monsters:users } ));
  }

  updateText = (e) => {
    this.setState({searchBox: e.target.value} );
  }

  render(){

    const {monsters, searchBox} = this.state;

    const filteredMonsters = monsters.filter(monster=> monster.name.toLowerCase().includes(searchBox.toLowerCase()));

    return(
      <div className="App">
        <h1> Fucking Monsters </h1>
        <SearchField 
        placeholder = "Search Monsters"
        eventHandler =  {e => this.updateText(e)}
        />

        <CardList monsters = {filteredMonsters}/>

      </div>
    )
  }
}

export default App;

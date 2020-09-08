import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchF: '',
    };
  }

  componentDidMount(){
    fetch( 'https://jsonplaceholder.typicode.com/users' )
    .then( response => response.json() )
    .then( users => this.setState( {monsters: users} ) )
  }

  onChangeHandler = (e) => {
    this.setState( {searchF: e.target.value} )
  }

  render () {

    const { monsters, searchF } = this.state;
    const filteredMonsters = monsters.filter( f =>
      f.name.toLowerCase().includes( searchF.toLowerCase() )
      )

    return (
      <div className="App">

        <h1>Monster Role</h1>

        <SearchBox 
        placeholder="search monsters" 
        onChangeHandler = {this.onChangeHandler}
        />

        <CardList monsters= {filteredMonsters} />
      </div>
    )
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons: [
      { name: "harold", age: 26 },
      { name: "Mona", age: 37 },
      { name: "Coralie", age: 36 }
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>Je suis une app React</h1>
        <button>Changer nom !</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
      </div>
    );
  }
}

export default App;

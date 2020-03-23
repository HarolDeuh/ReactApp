import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons: [
      { name: "harold", age: 26 },
      { name: "Mona", age: 37 },
      { name: "Coralie", age: 36 }
    ],
    showPerson: false
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 27 },
        { name: "MONA", age: 38 },
        { name: "CORALIE", age: 37 }
      ]
    })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson
    this.setState({ showPerson: !doesShow })

  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 27 },
        { name: "MONA", age: 38 },
        { name: "CORALIE", age: 37 }
      ]
    })

  }

  render() {

    let persons = null

    if (this.state.showPerson) {
      persons = (
        <div>
          <Person
            click={this.switchNameHandler}
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            changed={this.nameChangeHandler} />
        </div>

      )
    }
    return (
      <div className="App">
        <h1>Je suis une app React</h1>
        <button onClick={this.togglePersonHandler}>Afficher la personne !</button>
        {persons}
      </div>
    );
  }
}

export default App;
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons: [
      { id: "fev", name: "harold", age: 26 },
      { id: "wqe", name: "Mona", age: 37 },
      { id: "uik", name: "Coralie", age: 36 }
    ],
    showPerson: false
  }


  togglePersonHandler = () => {
    const doesShow = this.state.showPerson
    this.setState({ showPerson: !doesShow })

  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    });

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value

    const persons = [...this.state.persons]
    persons[personIndex] = person
    this.setState({ persons: persons })

  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons.slice()
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })

  }

  render() {

    let persons = null

    if (this.state.showPerson) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              changed={this.nameChangeHandler}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangeHandler(event, person.id)}
            />
          })}
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
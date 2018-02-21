import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
	state = {
		persons: [
			{ id:"qwe4764", name: "Max", age: 28 },
			{ id:"dsa3125", name: "Manu", age: 29 },
			{ id:"csa3124", name: "Stephanie", age: 26 }
		],
    showPersons: false
	}

	/*switchNameHandler = (name) => {
		// DON'T DO THIS: this.state.persons[0].name = "Maksimilian";
		this.setState({
			persons: [
				{ name: name, age: 28 },
				{ name: "Manu", age: 29 },
				{ name: "Stephanie", age: 27 }
			]
		});
	}*/

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    });

  }

	nameChangedHandler = (event, id) => {
    const persons = this.state.persons.slice();
    const personIndex = persons.findIndex((p) => p.id === id);

    const person = persons[personIndex];
    person.name = event.target.value;

		this.setState({
			persons: persons
		});
	}

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }

  render() {
  	const style = {
  		backgroundColor: "green",
      color: "white",
  		font: "inherit",
  		border: "2px solid blue",
  		padding: "8px",
  		cursor: "pointer"
  	};

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          { 
            this.state.persons.map((person, index) => {
              return <Person 
                name={person.name} 
                age={person.age} 
                click={() => this.deletePersonHandler(index)} 
                key={person.id} 
                changed={(event) => this.nameChangedHandler(event, person.id)}
                />  
            })
          }
        </div>
      );

      style.backgroundColor = "red";
    }

    return (
      <div className="App">
        <h1>Hi, This is my React App!</h1> 
        <button 
        	style={style}
        	onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>     
    );

    /*return React.createElement("div", {className: "App"}, React.createElement("h1", null, "Does it work now?"));*/
  }

}

export default App;

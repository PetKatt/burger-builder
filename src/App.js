import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";

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
    let persons = null;
    let btnClass = "";

    if (this.state.showPersons) {
      persons = (
        <div>
          { 
            this.state.persons.map((person, index) => {
              return (
                <ErrorBoundary key={person.id} >
                  <Person 
                  name={person.name} 
                  age={person.age} 
                  click={() => this.deletePersonHandler(index)} 
                  changed={(event) => this.nameChangedHandler(event, person.id)}
                  />
                </ErrorBoundary>  
              );
            })
          }
        </div>
      );

      btnClass = classes.Red;
    }

    const assignedClasses = [];
    if (this.state.persons.length <=2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <=1) {
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>Hi, This is my React App!</h1>
        <p className={assignedClasses.join(" ")}>This is working good!</p> 
        <button 
          className={btnClass}
        	onClick={this.togglePersonsHandler}>Toggle Persons
        </button>
        {persons}
      </div>     
    );

    /*return React.createElement("div", {className: "App"}, React.createElement("h1", null, "Does it work now?"));*/
  }

}

export default App;

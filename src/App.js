import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
	state = {
		persons: [
			{ name: "Max", age: 28 },
			{ name: "Manu", age: 29 },
			{ name: "Stephanie", age: 26 }
		],
    showPersons: false
	}

	switchNameHandler = (name) => {
		// DON'T DO THIS: this.state.persons[0].name = "Maksimilian";
		this.setState({
			persons: [
				{ name: name, age: 28 },
				{ name: "Manu", age: 29 },
				{ name: "Stephanie", age: 27 }
			]
		});
	}

	nameChangedHandler = (event) => {
		this.setState({
			persons: [
				{ name: "Max", age: 28 },
				{ name: event.target.value, age: 29 },
				{ name: "Stephanie", age: 26 }
			]
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
  		backgroundColor: "white",
  		font: "inherit",
  		border: "2px solid blue",
  		padding: "8px",
  		cursor: "pointer"
  	};

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person name={person.name} age={person.age} />  
          })}
        </div>
      );
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

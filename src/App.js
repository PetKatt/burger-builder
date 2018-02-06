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
  		border: "1px solid blue",
  		padding: "8px",
  		cursor: "pointer"
  	};

    return (
      <div className="App">
        <h1>Hi, This is my React App!</h1> 
        <button 
        	style={style}
        	onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {this.state.showPersons ?
          <div>
            <Person 
            	name={this.state.persons[0].name} 
            	age={this.state.persons[0].age} />
            <Person 
            	name={this.state.persons[1].name} 
            	age={this.state.persons[1].age}
            	click={() => this.switchNameHandler("asd")}
            	changed={this.nameChangedHandler}>My hobby: Racing</Person>
            <Person 
            	name={this.state.persons[2].name} 
            	age={this.state.persons[2].age} />
          </div> : null
        }
      </div>     
    );

    /*return React.createElement("div", {className: "App"}, React.createElement("h1", null, "Does it work now?"));*/
  }

}

export default App;

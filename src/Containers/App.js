import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/auxiliary';

class App extends Component {
  constructor(props) {
    super(props)
    console.log("[App.js] constructor    props = ", props);
  }

  static getDerivedStateFromProps = (props, state) => {

    console.log("[App.js] getDerivedStateFromProps...");
    console.log("PROPS = ", props);
    console.log("State = ", state);
    return state;

  }

  UNSAFE_componentWillMount() {
    console.log("[App.js] componentWillMount ")
  }

  componentDidMount() {
    console.log("[App.js] componentDidMount... ")
  }

  state = {
    persons: [
      { id: 'asfa1', name: 'Max', age: 28 },
      { id: 'vasdf1', name: 'Manu', age: 29 },
      { id: 'asdf11', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    console.log("[App.js] Rendring....");
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            changed={this.nameChangedHandler}
            clicked={this.deletePersonHandler} />
        </div>
      );

    }


    /*   HOC withClass approach 1  */
    // return (
      // <WithClass classes={classes.App}>
      //   <button onClick={() => { this.setState({showCockpit : !this.state.showCockpit}) }}>Remove Cockpit</button>
      //   {this.state.showCockpit ?
      //     <Cockpit
      //       title={this.props.title}
      //       clicked={this.togglePersonsHandler}
      //       personsLength={this.state.persons.length}
      //       showPersons={this.state.showPersons} />
      //     : null}
      //   {persons}
      // </WithClass>
    // );


    /*   HOC withClass approach 2  */
    return (
      <Aux>
        <button onClick={() => { this.setState({showCockpit : !this.state.showCockpit}) }}>Remove Cockpit</button>
        {this.state.showCockpit ?
          <Cockpit
            title={this.props.title}
            clicked={this.togglePersonsHandler}
            personsLength={this.state.persons.length}
            showPersons={this.state.showPersons} />
          : null}
        {persons}
      </Aux>
    );




    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

/*   HOC withClass approach 1  */
// export default App;


/*   HOC withClass approach 2  */
export default withClass(App, classes.App);

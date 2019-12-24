import React, { Component } from 'react';

import Person from './Person/Person';

//****************   Implementation of Persons component using classes   *************/
class Persons extends Component {

  constructor() {
    super();
    this.state = {};
  }

  static getDerivedStateFromProps (props, state){
    console.log("[Persons.js]  getDerivedStateFromProps...");
    return state
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log("[Persons.js]  shouldComponentUpdate...");
    if(nextProps.persons !== this.props.persons){
      return true;
    } else {
      return false;
    }
    // return true;
  }


  componentDidUpdate(){
    console.log("[Persons.js]  componentDidUpdate...");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log("[Persons.js]  getSnapshotBeforeUpdate...");
    return null;
  }

  render(){
    console.log("[Persons.js]  rendring...");
    return this.props.persons.map( ( person, index ) => {
      return <Person
        click={() => this.props.clicked( index )}
        name={person.name}
        age={person.age}
        key={person.id}
        changed={( event ) => this.props.changed( event, person.id  )} />
    })
  }
}
export default Persons

//****************    functional implementation of Persons component   *************/
// const persons = ( props ) => { 
//   console.log("[Persons.js]  rendring...")
//   return props.persons.map( ( person, index ) => {
//     return <Person
//       click={() => props.clicked( index )}
//       name={person.name}
//       age={person.age}
//       key={person.id}
//       changed={( event ) => props.changed( event, person.id  )} />
//   } )
  
// }

// export default persons;
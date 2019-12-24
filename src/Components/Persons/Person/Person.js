import React, {Component} from 'react';

import classes from './Person.css';
import Aux from './../../../hoc/auxiliary'


//****************   Implementation of Person component using classes   *************/
class Person extends Component {

    render(){
        console.log("[Person] rendring.. ");
        return (
            <Aux>
            {/* <div className={classes.Person}> */}
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            {/* </div> */}
            </Aux>
        )
    }
};

export default Person;



//****************    functional implementation of Person component   *************/
// const person = ( props ) => {
//     console.log("[Person] rendring.. ")
//     return (
//         <div className={classes.Person}>
//             <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
//             <p>{props.children}</p>
//             <input type="text" onChange={props.changed} value={props.name} />
//         </div>
//     )
// };

// export default person;
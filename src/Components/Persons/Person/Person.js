import React, {Component} from 'react';
import PropTypes from 'prop-types';

import classes from './Person.css';
import Aux from './../../../hoc/auxiliary';
import withClass from './../../../hoc/withClass';


//****************   Implementation of Person component using classes   *************/
class Person extends Component {
    constructor(){
        super();
        this.inputElementRef = React.createRef();
    }

    componentDidMount(){
            // this.inputElement.focus(); // #approach 1         focus on input element                supported by older react versions
            this.inputElementRef.current.focus(); // #approach 2         focus on input element        supported by react ^16.3.0

    }


    render(){
        console.log("[Person] rendring.. ");
        return (
            <Aux>
            {/* <div className={classes.Person}> */}
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input 
                type="text" 
                // ref = {(inputElement) => {
                //     console.log("inputElement = ", inputElement);
                //     this.inputElement = inputElement;
                // }}                                                                     //    #approach 1

                ref = {this.inputElementRef}


                onChange={this.props.changed} 
                value={this.props.name} />
            {/* </div> */}
            </Aux>
        )
    }
};

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default withClass(Person, classes.Person);



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
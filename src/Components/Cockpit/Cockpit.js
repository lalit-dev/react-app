import React, { useEffect, useRef } from "react";
import classes from "./Cockpit.css";
import Aux from "../../hoc/auxiliary";
import AuthContext from './../../Context/auth-context';

const cockpit = (props) => {
  console.log("[Cockpit] rendring...    React.version = ", React.version);
  console.log(" Cockpit PROPS = ", props);

  let btnRef = useRef();


  useEffect(() => {
    console.log("[Cockpit.js] useEffect... ", props.personsLength);
    // here Http request can be executed
    // it execute after every render cycle 
    // setTimeout(() => {
    //   alert("data saved on cloud");
    // }, 1000)
    btnRef.current.click();
    return () => {
      console.log("[Cockpit.js] cleaning useEffect", props.personsLength)
    }
  }, [props.personsLength]);

  useEffect(() => {
    console.log("[Cockpit.js] 2nd useEffect...", props.personsLength);
    return () => {
      console.log("[Cockpit.js] cleaning 2nd useEffect", props.personsLength);
    }
  })

  const assignedClasses = [];
  let btnClass = '';
  if (props.showPersons) {
    btnClass = classes.Red;
  }
  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red); // classes = ['red']
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold); // classes = ['red', 'bold']
  }




  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button
        ref={btnRef}
        className={btnClass} 
        onClick={props.clicked}>Toggle Persons</button>
      <AuthContext.Consumer>{(context) => {
        return (
          <button onClick={context.login}>Log In</button>
        );
      }}</AuthContext.Consumer>
    </div>
  );

  // return (
  //   <Aux>
  //     <h1>{props.title}</h1>
  //     <p className={assignedClasses.join(' ')}>This is really working!</p>
  //     <button
  //       className={btnClass}
  //       onClick={props.clicked}>Toggle Persons</button>

  //   </Aux>
  // );
}

export default cockpit
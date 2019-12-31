import React from 'react';


/*   Approach 1    */
// const withClass = (props) => {
//     return(
//         <div className = {props.classes}>
//             {props.children}
//         </div>
//     )
// }



/* Approach 2     */
const withClass = (WrappedComponent, classes) => {
    return props => (
        <div className = {classes}>
            <WrappedComponent {...props}/>
        </div>
    )
}

export default withClass;
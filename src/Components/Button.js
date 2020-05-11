import React from 'react'
import Super from './Super'

 function Button(props) {
    return (
        <React.Fragment>
            <button onClick={props.handleClick}>click me {props.name}</button>
        </React.Fragment>
    )
}
export default Super(Button)
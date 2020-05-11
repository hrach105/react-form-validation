import React from 'react'
import Super from './Super'

function Title(props) {
    return (
        <div>
            <p>main content</p>
            <button onClick={props.handleClick}>click me {props.name}</button>
        </div>
    )
}
export default Super(Title)
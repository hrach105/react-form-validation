import React from 'react'
import { MyContext } from '../App'

export default function Component1(props) {
    return (
        <div>
            <MyContext.Consumer>
                {value => <p>{value}</p>}
            </MyContext.Consumer>
        </div>
    )
}

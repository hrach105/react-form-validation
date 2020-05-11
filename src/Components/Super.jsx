import React from 'react'

 function Super(Component) {
    return class Super extends React.Component{
        constructor(props) {
            super(props)
            this.state = {
                count:0,
                heading: 'headin with hoc'
            }
            this.handleClick = this.handleClick.bind(this)
        }
        handleClick = () => {
           
        }
        render(){
            return(
                <div>
                    <h1>{this.state.heading}</h1>
                    <Component  {...this.props} handleClick={this.handleClick} />
                </div>
            )
        }
    }
}

export default Super
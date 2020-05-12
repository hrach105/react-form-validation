import React, { Component } from 'react'

export class Form extends Component {
    state = {
        email:'',
        password:'',
        confirmPassword:'',
        emailEror: false,
        passwordError:false,
        confirmPasswordError:false,
        success: false
    }
    handleChangeEmail = (e) => {
        this.setState({
            email: e.target.value,
        })
    }
    handleChangePassword = e => {
        this.setState({
            password: e.target.value
        })
    } 
    handleChangeConfirmPassword = (e) => {
        this.setState({
            confirmPassword: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        if(this.state.email === ''){
            this.setState({
                emailEror: true
            })
        }  else {
            this.setState({
                emailEror: false
            })
        }       

        if(this.state.password === ''){
            this.setState({
                passwordError: true
            })
        } else{
            this.setState({
                passwordError: false
            })
        }

        if(this.state.confirmPassword === ''){
            this.setState({
                confirmPasswordError:true
            })
        } else {
            this.setState({
                confirmPasswordError:false
            })
        }

        if(this.state.password !== '' &&  this.state.email && this.state.confirmPassword  !== '') {
            this.setState({
                success: true
            })
        } else{
            this.setState({
                success:false
            })
        }
    }
    render() {
        return (
         <form  onSubmit={this.handleSubmit}>
             { this.state.emailEror ? <p className="alert alert-danger"> email is empty </p> : null}
             { this.state.passwordError ? <p className="alert alert-danger">password is empty</p> : null}
             {this.state.confirmPasswordError ? <p className="alert alert-danger">confirm password is empty</p> :null}
             { this.state.success ? <p className="alert alert-success">Success</p> : null}
             
             <div className="card">
                 <div className="card-header">
                     Form Validation
                 </div>
                 <div className="card-body">
                 <div className="form-group">
                 <input 
                    name="email"
                    type="email" 
                    onChange={this.handleChangeEmail}
                />
             </div>
             <div className="form-group">
                 <input 
                    type="password"
                    name="password"
                    onChange={this.handleChangePassword}
                 />
                  <input 
                    type="password"
                    name="repeatPassword"
                    onChange={this.handleChangeConfirmPassword}
                 />
             </div>
             <div className="form-group">
                <button type="submit" className="btn btn-dark btn-lg">click me</button>
             </div>
                 </div>
             </div>
         </form>

        )
    }
}

export default Form

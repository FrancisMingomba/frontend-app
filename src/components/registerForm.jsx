import Joi from 'joi-browser';
import React from 'react';
import Form from './form';
import * as userService from  '../services/userService';
import "../css/registerForm.css";
//import { Navigate } from 'react-router-dom';



class RegisterForm extends Form{
    state = { 
        data: {username: "", password: "", name: ""},
        errors: {}
     };

     schema = {
        username: Joi.string().required().email().label("Username"),
        password: Joi.string().required().min(5).label("Password"),
        name: Joi.string().label("Name")
     };

     doSubmit =  async () =>{
    
     // redirection code. probably capture the return value from above and check if it was successful.
    try {
        await userService.register(this.state.data);
       
        
    } catch (ex) {
        if (ex.response && ex.response.status === 400) {
            const errors = { ...this.state.errors };
            errors.username = ex.response.data;
            this.setState({ errors });
        }
        
    }


     }

    render() { 
        return (
          
            <div className="auto-form-container">
                <h1>Sign up</h1>
                <form  onSubmit={this.handleSubmit}>
                    {this.renderInput("name", "Name")}
                    {this.renderInput("username", "Username")}
                    {this.renderInput("password", "Password","password")}
                    {this.renderButton("Register")}
                </form>
            </div>
        );
    }
}
 
export default  RegisterForm;

import Joi from 'joi-browser';
import React from 'react';
import Form from './form';
import * as userService from  '../services/userService';



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
     await userService.register(this.state.data);
     // redirection code. probably capture the return value from above and check if it was successful.
     }

    render() { 
        return (
            <div>
                <h1>Register</h1>
                <form onSubmit={this.handleSubmit}>
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

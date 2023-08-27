import React  from 'react';
import Joi from 'joi-browser';
import Form from './form';
import { login } from '../services/authService';


class RegisterForm extends Form{
    state = { 
        data: {username: "", password: ""},
        errors: {}
     };

     schema = {
        username: Joi.string().required().email().label("Username"),
        password: Joi.string().required().min(5).label("Password")
       
     };

     doSubmit = async () =>{
        const { data } = this.state;
        await login(data.username, data.password);
     };

    render() { 
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("username", "Username")}
                    {this.renderInput("password", "Password","password")}
                    {this.renderButton("Login")}
                </form>
            </div>
        );
    }
}
 
export default  RegisterForm;


import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginForm from './components/loginForm';
import NavBar from "./components/navBar";
import RegisterForm from "./components/registerForm";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Routes>
            <Route path="login" Component={LoginForm} />
            <Route path="register" Component={RegisterForm} />
          </Routes>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
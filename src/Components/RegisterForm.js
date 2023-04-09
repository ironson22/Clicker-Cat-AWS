import React, { useState } from "react";
import '../Styles/Bulma.css'
import '../Styles/CustomStyles.css'
import logo from "../Assets/ClickerCat-logos/ClickerCat-logos_transparent.png";
import { useNavigate } from "react-router-dom";
import dataSource from "../datasource.js";

const RegisterForm = () => {
  //Log that we are entering the method
  window.logger._LTracker.push("Entered RegisterForm()");
  //Email from the user
  const [newEmail, setNewEmail] = useState('');
  //Password from the user
  const [newPassword, setNewPassword] = useState('');
  //Name from the user
  const [newName, setNewName] = useState('');
  //Navigational tool 
  const navigate = useNavigate();

  //Function to update the email variable
  const updateEmail = (event) => {
    //Log that we are entering the method
    window.logger._LTracker.push("Entered RegisterForm.updateEmail()");
    setNewEmail(event.target.value);
    //Log that we are leaving the method
    window.logger._LTracker.push("Leaving RegisterForm.updateEmail()");
  };
  //Function to update the password variable
  const updatePassword = (event) => {
    //Log that we are entering the method
    window.logger._LTracker.push("Entered RegisterForm.updatePassword()");
    setNewPassword(event.target.value);
    //Log that we are leaving the method
    window.logger._LTracker.push("Leaving RegisterForm.updatePassword()");
  };
  //Function to update the name variable
  const updateName = (event) => {
    //Log that we are entering the method
    window.logger._LTracker.push("Entered RegisterForm.updateName()");
    setNewName(event.target.value);
    //Log that we are leaving the method
    window.logger._LTracker.push("Leaving RegisterForm.updateName()");
  };

  //Function to handle a form submission
  const handleFormSubmit = (event) => {
    //Log that we are entering the method
    window.logger._LTracker.push("Entered RegisterForm.handleFormSubmit()");
    //Prevent defaults
    event.preventDefault();

    //Log a successful submission
    console.log("submit");

    //Create a user object
    const newUser = {
      email: newEmail,
      password: newPassword,
      name: newName,
    };

    //Log the user data
    console.log(newUser);

    //Call the api function
    saveUser(newUser);
    //Log that we are leaving the method
    window.logger._LTracker.push("Leaving RegisterForm.handleFormSubmit()");
  };

  //Call to the API to save a user to the database
  const saveUser = async (user) => {
    //Log that we are entering the method
    window.logger._LTracker.push("Entered RegisterForm.saveUser()");
    //Send the request and save the response
    let response = await dataSource.post("/users", user);

    //Log API response
    console.log(response);
    console.log(response.data);

    //Navigate home
    navigate("/home");
    //Log that we are leaving the method
    window.logger._LTracker.push("Leaving RegisterForm.saveUser()");
  };  

    //Returns the form
    return (
      <div className="container is-max-desktop">
        <section className="section logo-section">
          <div className="logoContainer">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
          </div>
        </section>
        <section className="section">
          <form onSubmit={handleFormSubmit}>
            <div className="field">
              <label className="label">Email</label>
              <div className="control has-icons-right">
                <input
                  className="input is-link is-medium"
                  type="email"
                  placeholder="Email"
                  onChange={updateEmail}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
                <span className="icon is-small is-right">
                  <i className="fas fa-exclamation-triangle"></i>
                </span>
              </div>
            </div>
            <div className="field">
              <label className="label">Password</label>
              <div className="control has-icons-right">
                <input
                  className="input is-link is-medium"
                  type="password"
                  placeholder="Password"
                  onChange={updatePassword}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
                <span className="icon is-small is-right">
                  <i className="fas fa-exclamation-triangle"></i>
                </span>
              </div>
            </div>
            <div className="field">
              <label className="label">Name</label>
              <div className="control has-icons-right">
                <input
                  className="input is-link is-medium"
                  type="text"
                  placeholder="Name"
                  onChange={updateName}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
                <span className="icon is-small is-right">
                  <i className="fas fa-exclamation-triangle"></i>
                </span>
              </div>
            </div>

            <div className="customCard">
              <div className="field is-grouped">
                <div className="control">
                  <button className="button is-link" type="submit">Register</button>
                </div>
                <div className="control">
                  <a className="button is-link is-outlined" href="/">
                    Login
                  </a>
                </div>
              </div>
            </div>
          </form>
        </section>
      </div>
    );
};

export default RegisterForm;
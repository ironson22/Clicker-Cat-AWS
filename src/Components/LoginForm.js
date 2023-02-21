import React, { useState } from "react";
import '../Styles/Bulma.css'
import '../Styles/CustomStyles.css'
import logo from "../Assets/ClickerCat-logos/ClickerCat-logos_transparent.png";
import { createSearchParams, useNavigate } from "react-router-dom";
import dataSource from "../datasource.js";

const LoginForm = () => {
  //User email variable
  const [newEmail, setNewEmail] = useState('');
  //User password variable
  const [newPassword, setNewPassword] = useState('');
  //Navigational tool
  const navigate = useNavigate();

  //Function to update the email variable
  const updateEmail = (event) => {
    setNewEmail(event.target.value);
  };
  //Function to update the password variable
  const updatePassword = (event) => {
    setNewPassword(event.target.value);
  };

  //Function to handle form submission
  const handleFormSubmit = (event) => {
    event.preventDefault();

    //Log the submission
    console.log("submit");
    //Create a user object
    const User = {
      email: newEmail,
      password: newPassword,
    };

    //Log the object
    console.log(User);

    //Call the api function
    saveUser(User);
  };

  //Function to call the api and login the user
  const saveUser = async (user) => {
    //Call the api and save the response
    let response = await dataSource.post("/users/login", user);

    //Log the responses
    console.log(response);
    console.log(response.data);

    //If the api returns with a status of 200 it was successful,
    //else there was a problem so navigate back to the login form with a failure id
    if (response.status === 200)
    {
      navigate({
        pathname: "/home",
        search: createSearchParams({
          role: response.data.role
        }).toString()
      });
    } else {
      navigate({
        pathname: "/",
        search: createSearchParams({
          id: "fail"
        }).toString()
      });
    }
  };  

    //Return the form
    return (
      <div className="container is-max-desktop">
        <section className="section logo-section">
          <div className="logoContainer">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
          </div>
        </section>
        <form onSubmit={handleFormSubmit}>
        <section className="section">
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

          <div className="customCard">
            <div className="field is-grouped">
              <div className="control">
                <button className="button is-link">Login</button>
              </div>
              <div className="control">
                <a className="button is-link is-outlined" href="/register">
                  Register
                </a>
              </div>
            </div>
          </div>
        </section>
        </form>
      </div>
    );
};

export default LoginForm;
import React, { useState } from "react";
import '../Styles/Bulma.css'
import '../Styles/CustomStyles.css'
import logo from "../Assets/ClickerCat-logos/ClickerCat-logos_transparent.png";
import { useNavigate } from "react-router-dom";
import dataSource from "../datasource.js";

const RegisterForm = () => {
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
    setNewEmail(event.target.value);
  };
  //Function to update the password variable
  const updatePassword = (event) => {
    setNewPassword(event.target.value);
  };
  //Function to update the name variable
  const updateName = (event) => {
    setNewName(event.target.value);
  };

  //Function to handle a form submission
  const handleFormSubmit = (event) => {
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
  };

  //Call to the API to save a user to the database
  const saveUser = async (user) => {
    //Send the request and save the response
    let response = await dataSource.post("/users", user);

    //Log API response
    console.log(response);
    console.log(response.data);

    //Navigate home
    navigate("/home");
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
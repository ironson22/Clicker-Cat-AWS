import React from "react";
import '../Styles/Bulma.css'
import RegisterForm from "../Components/RegisterForm";

const Register = () => {
    //Log that we are entering the page
    window.logger._LTracker.push("Entered Register()");
    //Return register form
    return(
        //Log that we are showing the normal view
        window.logger._LTracker.push("Showing Normal View"),
        <div>
            <RegisterForm />
        </div>
    );
}

export default Register;
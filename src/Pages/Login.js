import React from "react";
import '../Styles/Bulma.css'
import LoginForm from "../Components/LoginForm";
import LoginFormFail from "../Components/loginFormFail";
import { useSearchParams } from "react-router-dom";


const Login = () => {
    //Log that we are entering the page
    window.logger._LTracker.push("Entered Login()");
    //Parameters used for navigation
    const [searchparams] = useSearchParams();

    //If the user enters incorrect login information it will throw this form
    if (searchparams.get("id") === "fail"){
        return (
            //Log that we are showing the fail view
            window.logger._LTracker.push("Showing Fail View"),
            <div>
                <LoginFormFail />
            </div>
        );
    } else {
        //Log that we are showing the normal view
        window.logger._LTracker.push("Showing Normal View");
        //Returns normal view
        return(
            <div>
                <LoginForm />
            </div>
        );
    }

}

export default Login;
import React from "react";
import '../Styles/Bulma.css'
import LoginForm from "../Components/LoginForm";
import LoginFormFail from "../Components/loginFormFail";
import { useSearchParams } from "react-router-dom";


const Login = () => {
    //Parameters used for navigation
    const [searchparams] = useSearchParams();

    //If the user enters incorrect login information it will throw this form
    if (searchparams.get("id") === "fail"){
        return (
            <div>
                <LoginFormFail />
            </div>
        );
    } else {
        //Returns normal view
        return(
            <div>
                <LoginForm />
            </div>
        );
    }

}

export default Login;
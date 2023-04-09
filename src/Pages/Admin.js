import React from "react";
import '../Styles/Bulma.css'
import ListUser from "../Components/ListUser";
import "../Styles/CustomStyles.css"
import { createSearchParams, useNavigate } from "react-router-dom";

const Admin = () => {
    //Log that we are entering the page
    window.logger._LTracker.push("Entered Admin()");
    //Navigational tool to help move the user around the application
    const navigate = useNavigate();

    //Router function that makes sure admins keep the ability to access the admin panel
    const goHome = () => {
        //Log that we are entering the method
        window.logger._LTracker.push("Entered Admin.goHome()");
        navigate({
            pathname: "/home",
            search: createSearchParams({
              role: "ADMIN"
            }).toString()
          });
        //Log that we are leaving the method
        window.logger._LTracker.push("Leaving Admin.goHome()");
    }

    //Return the admin page view
    return(
        <div>
            <button onClick={goHome} className="button is-link admin-button">Home</button>
            <section className="section">
                <ListUser />
            </section>
        </div>
    );
}

export default Admin;

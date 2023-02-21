import React from "react";
import '../Styles/Bulma.css'
import ListUser from "../Components/ListUser";
import "../Styles/CustomStyles.css"
import { createSearchParams, useNavigate } from "react-router-dom";

const Admin = () => {
    //Navigational tool to help move the user around the application
    const navigate = useNavigate();

    //Router function that makes sure admins keep the ability to access the admin panel
    const goHome = () => {
        navigate({
            pathname: "/home",
            search: createSearchParams({
              role: "ADMIN"
            }).toString()
          });
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

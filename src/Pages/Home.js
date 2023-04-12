import React from "react";
import '../Styles/Bulma.css'
import CatGenerator from "../Components/CatGenerator";
import { useSearchParams } from "react-router-dom";
import "../Styles/CustomStyles.css"

const Home = () => {
    //Log that we are entering the page
    window.logger._LTracker.push("Entered Home()");
    //Parameters used for the role
    const [searchparams] = useSearchParams();

    //If the user's role is Admin then a button will appear to access the admin console.
    //NOTE: This is not secure or up to standard by any means, it is just here to demonstrate the different roles capabilites.
    if (searchparams.get("role") === "ADMIN")
    {
        //Returns the home page view
        return(
            //Log that we are showing the admin button
            window.logger._LTracker.push("Showing Admin Button"),
            <div>
                <a href="/admin" className="button is-link admin-button">Admin Console</a>
                <section className="section">
                    <CatGenerator />
                </section>
            </div>
        );
    } else {
        //Log that we are showing the normal view
        window.logger._LTracker.push("Showing Normal View");
        //Returns the home page view
        return(
            <div>
                <section className="section">
                    <CatGenerator />
                </section>
            </div>
        )
    }
}

export default Home;

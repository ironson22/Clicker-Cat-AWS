import React, { useEffect, useState } from "react";
import '../Styles/Bulma.css'
import '../Styles/CustomStyles.css'

//API url
const URL = 'https://api.thecatapi.com/v1/images/search';

//Function to call the cat api
const getRandomCat = async() => {
    //Calling the cat API and saving it's response
    const response = await fetch(URL);
    //Saving the response as a json
    const body = await response.json();
    //Return the picture url
    return body[0].url;
}

const CatGenerator = () => {
    //Url of the picture being displayed in the box
    const [url, setUrl] = useState();

    //Function to load a picture on application startup
    useEffect(() => {
        onClickHandler();
    }, []);

    //Function to handle the button click and call a new cat picture
    const onClickHandler = async () => {
        //Logging the status
        console.log("Getting a cat...");
        //Getting a new pic from the cat API
        const pic = await getRandomCat();
        //Setting the picture url to the new cat picture
        setUrl(pic);
    };

    //Return view
    return (
      <div className="container is-max-desktop">
        <div className="profile-cards cardStyles">
          <div className="card">
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <div className="rows">
                    <div className="row">
                      <img src={url} className="catImage" alt="" />
                    </div>
                    <div className="row button-row">
                      <div className="catButton">
                        <button
                          onClick={onClickHandler}
                          className="button is-link"
                        >
                          Click me for a Cat
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default CatGenerator;
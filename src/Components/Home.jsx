import React from 'react';

export default class Home extends React.Component{
    render(){
        const pictureDisplay = this.props.pets.slice(7,15).map(pet => pet.profile_pic)
        return(
            <div>
                <div className="homeGreeting">
                    <h1> Ready to be a proud pet parent? </h1>
                    <p><i>Pet Date</i> will help you find the right pet for your household. </p>
                    <p> We gather live data from adoption clinics near you to help speed up the adoption process and notify you of any newcomers to the clinics. </p>
                </div>
                <div className="homePhotosAndButtons">
                    <div className="homePhotosContainer">
                        <span>
                            {pictureDisplay.map((picUrl,index) => <img 
                                key={index} 
                                className="homePhotos" 
                                src={picUrl} 
                                alt='Home Pets Slideshow'/>
                            )}
                        </span>
                    </div>
                    <div className="homeButtonsContainer">
                        <button className="logInButton">Log In</button>
                        <button className="registerButton">Register</button>
                    </div>
                </div>
            </div>
        )
    }
}
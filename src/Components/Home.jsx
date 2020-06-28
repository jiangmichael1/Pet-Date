import React from 'react';

export default class Home extends React.Component{
    render(){
        const pictureDisplay = this.props.pets.slice(3,8).map(pet => pet.profile_pic)
        return(
            <div>
                <h3> You are at home! </h3>
                {/* {pictureDisplay.map((picUrl,index) => <img key={index} src={picUrl} alt='Home Pets Slideshow'/>)} */}
            </div>
        )
    }
}
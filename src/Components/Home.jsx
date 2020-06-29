import React from 'react';

export default class Home extends React.Component{
    render(){
        const pictureDisplay = this.props.pets.slice(4,8).map(pet => pet.profile_pic)
        return(
            <div>
                <h3> Welcome to Pet Date! </h3>
                {pictureDisplay.map((picUrl,index) => <img 
                    key={index} 
                    style={{height:250+'px', width:300+'px'}} 
                    src={picUrl} 
                    alt='Home Pets Slideshow'/>
                )}
            </div>
        )
    }
}
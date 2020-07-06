import React from 'react';

export default class AC extends React.Component{
    render(){
        const { name, address, image_url, description } = this.props.ac
        return(
            <div className="acInfo">
                <h2>{name}</h2>
                <p>{description}</p>
                <p>{address}</p>
                <img className="acLogo" src={image_url} alt="{name}"/>

            </div>
        )
    }
}
import React from 'react';

export default class AC extends React.Component{
    render(){
        const { name, address, image_url, description, phone_number } = this.props.ac
        return(
            <div className="acInfo">
                <h2>{name}</h2>
                <p>{phone_number}</p>
                <p>{address}</p>
                <p>{description}</p>
                <img className="acLogo" src={image_url} alt="{name}"/>

            </div>
        )
    }
}
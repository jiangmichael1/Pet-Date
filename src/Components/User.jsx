import React from 'react';

export default class User extends React.Component{
    render(){
        const { name, age, gender, address, income, phone_number, bio, profile_picture } = this.props.user
    
        return(
            <div className="userInfoContainer">
                <h2>{name}</h2> <p>{age}</p>
                <img className="userProPic" src={profile_picture} alt={`${name} profile pic` }/>
                <p>{gender}</p>
                <p><b>Address:</b> {address}</p>
                <p><b>Income:</b> ${income} </p>
                <p><b>Phone Number:</b> {phone_number}</p>
                <p><b>Bio:</b> {bio}</p>
            </div>

        )
    }
}
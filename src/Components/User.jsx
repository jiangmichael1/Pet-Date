import React from 'react';

export default class User extends React.Component{
    render(){
        const { name, age, gender, address, income, phone_number, bio, profile_picture } = this.props.user
    
        return(
            <div>
                <h2>{name}</h2> <p>{age}</p>
                <img src={profile_picture} alt={`${name} profile pic` }/>
                <p>{gender}</p>
                <p>Address: {address}</p>
                <p>Income: {income} </p>
                <p>Phone Number: {phone_number}</p>
                <p>Bio:{bio}</p>

            </div>

        )
    }
}
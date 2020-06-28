import React from 'react';
import User from '../Components/User'

export default class UserContainer extends React.Component{
    render(){
        return(
            <React.Fragment>
                <h1> UserContainer: I display the User's profile page!</h1>  
                {<User key={this.props.user.id} user={this.props.user} />}
            </React.Fragment>
        )
    }
}
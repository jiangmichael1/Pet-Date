import React from 'react';
import User from '../Components/User'

export default class UserContainer extends React.Component{
    render(){
        return(
            <div className="userContainer"> 
                {<User key={this.props.user.id} user={this.props.user} />}
            </div>
        )
    }
}
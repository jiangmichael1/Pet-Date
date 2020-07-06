import React from 'react';
import User from '../Components/User'

export default class UserContainer extends React.Component{
    render(){
        return(
            <React.Fragment> 
                {<User key={this.props.user.id} user={this.props.user} />}
            </React.Fragment>
        )
    }
}
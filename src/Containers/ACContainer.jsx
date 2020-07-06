import React from 'react';
import AC from '../Components/AC'

export default class ACContainer extends React.Component{
    render(){
        return(
            <React.Fragment>
                <h1>Nearby Adoption Centers:</h1>
                <div>
                    {this.props.acs.map(ac => <AC key={ac.id} ac={ac} />)}
                </div>
                
            </React.Fragment>
        )
    }
}
import React from 'react';
import AC from '../Components/AC'

export default class ACContainer extends React.Component{
    render(){
        return(
            <React.Fragment>
                <h1 className="acGreeting">Nearby Adoption Centers:</h1>
                
                    {this.props.acs.map(ac => <AC key={ac.id} ac={ac} />)}
            
                
            </React.Fragment>
        )
    }
}
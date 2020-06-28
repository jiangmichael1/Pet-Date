import React from 'react';
import AC from '../Components/AC'

export default class ACContainer extends React.Component{
    render(){
        return(
            <React.Fragment>
                <h1> ACContainer: I display adoption center control panel that's only accessible thru AC login.</h1>
                <AC />
            </React.Fragment>
        )
    }
}
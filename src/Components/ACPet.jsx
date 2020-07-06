import React from 'react';

export default class ACPet extends React.Component {
    render(){
        return(
            <div>
                {this.props.pet.name}
            </div>
        )
    }
}
import React from 'react';
import ACPet from '../Components/ACPet'

export default class ACPetsContainer extends React.Component{
    render(){
        return(
            <div>
                <h1> Pets Currently Waiting for Adoption:</h1>
                {this.props.acPets.map(pet => <ACPet key={pet.id} pet={pet} />)}
            </div>
        )
    }
}
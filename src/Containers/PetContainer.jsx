import React from 'react';
import Pet from '../Components/Pet'

export default class PetContainer extends React.Component{
    state = {
        start: 0
    }
    

    petFilter = (arr, start) => {
        return arr.slice(start, start + 1)
    }

    changeStart = (startValue) => {
        this.setState({
            start: startValue
        })
    }
    


    render(){
        
        return(
            <div className="petContainerInfo">
                <h1> Here are some pets waiting to be adopted near you: </h1>
                <div className="petContainer">
                    {this.petFilter(this.props.pets, this.state.start).map(pet => 
                        <Pet 
                            key={pet.id} 
                            start={this.state.start} 
                            changeStart={this.changeStart} 
                            pet={pet}
                            userId={this.props.userId}
                            likedPets={this.props.likedPets}
                            addLikedPet={this.props.addLikedPet}
                        />
                    )}
                </div>
            </div>
        )
    }
}
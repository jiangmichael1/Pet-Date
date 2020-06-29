import React from 'react'
import Pet from './Pet'

class LikedPetDisplay extends React.Component{
    state = {
        toggleDisplay: false
    }

    handleDisplay = (e) => {
        this.setState(prevState => ({
            toggleDisplay: !prevState.toggleDisplay
        }))
    }

    render(){
        const {animal_type, name, age, gender, breed, profile_pic} = this.props.pet
        return (  
            <div className="likedPet">
                <h5  onClick={this.handleDisplay}>{name}</h5>
                {this.state.toggleDisplay 
                    ?   
                    <div >
                        {animal_type === "cat" ? "Cat" : "Dog"}
                        <br />
                        {name} {gender === "Female" ? "♀" : "♂"} 
                        <br/>
                        Breed: {breed}
                        <br/>
                        Age: {age}
                        <br/>
                        <img style={{height:500+'px', width:500+'px'}} src={profile_pic}/>

                        

                    </div>
                    : null
            }
            </div>
        );
    }
}
 
export default LikedPetDisplay;
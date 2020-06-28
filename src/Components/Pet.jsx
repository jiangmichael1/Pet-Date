import React from 'react';
const baseUrl=`http://localhost:3001`
const urlHeaders = {
    'Content-Type': 'application/json',
    'Accepts': 'application/json'
}


class Pet extends React.Component{

    /* ======HELPERS ======*/

    // addCurrentPetToUsersLikedPets = () => {
    //     fetch(`${baseUrl}/liked_pets`,{
    //         method: "POST",
    //         headers: urlHeaders,
    //         body: JSON.stringify({
    //             user_id: 1,
    //             pet_id: this.props.pet.id,
    //             like: "neutral"
    //         })
    //     })
    //     .then(r => r.json())
    //     .then(pet => {
    //         this.props.addLikedPet(pet)
    //         console.log(pet)
    //     })
    // }

    postLikeOrDislike = (opinion) => {
        fetch(`${baseUrl}/liked_pets`,{
            method: "POST",
            headers: urlHeaders,
            body: JSON.stringify({
                user_id: 1,
                pet_id: this.props.pet.id,
                like: opinion
            })
        })
    }

    handleClick = (e) => {
        if(e.target.textContent === "Like"){
            this.postLikeOrDislike("Liked")
        }else{
            this.postLikeOrDislike("Disliked")
        }
        this.props.changeStart(this.props.start + 1)
    }
     
    render(){
        const { animal_type, name, age, gender, breed, profile_pic } = this.props.pet
        return(
            
            <div>
                <p>{animal_type}</p>
                <h5>{name}</h5>
                <p>{age}</p>
                <p>{gender}</p>
                <p>{breed}</p>
                <img src={profile_pic} alt={name} />
                <button onClick={this.handleClick}>Like</button>
                <button onClick={this.handleClick}>Dislike</button>
            </div>
        )
    }
}

export default Pet
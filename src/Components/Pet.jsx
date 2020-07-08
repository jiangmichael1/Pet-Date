import React from 'react';
const baseUrl=`http://localhost:3001`
const urlHeaders = {
    'Content-Type': 'application/json',
    'Accepts': 'application/json'
}


class Pet extends React.Component{

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
        .then(r => r.json())
        .then(pet => {
            this.props.addLikedPet(pet)
        })
    }

    handleClick = (e) => {
        if(e.target.className === "greenCheck"){
            this.postLikeOrDislike("Liked")
        }else{
            this.postLikeOrDislike("Disliked")
        }
        this.props.changeStart(this.props.start + 1)
    }
     
    render(){
        const { animal_type, name, age, gender, breed, profile_pic, color, size, coat_length, good_with, care_and_behavior, bio } = this.props.pet
        
        return(
            <div className="petInfoContainer">

                {!this.props.display
                    ? <button className="likeButton" onClick={this.handleClick}><img className="redx" src="https://i.ibb.co/9TYTNk2/Red-X.png" alt="red x" /></button>    
                    : null
                }
                
                <div className="petProPicContainer">
                    <img className="petProPic" src={profile_pic} alt={name} />
                </div>
                
                <div className="petInfo">
                    <h1>{name}</h1> <p>{age} years old {gender} {breed}</p>
                    <p><b>Bio: </b> {bio}</p>
                    <p><b>Color(s):</b> {color}</p>
                    <p><b>Size:</b> {size}</p>
                    <p><b>Coat Length:</b> {coat_length}</p>
                    <p><b>Good With:</b> {good_with}</p>
                    <p><b>Care and Behavior:</b> {care_and_behavior}</p>
                </div>
                  
                {!this.props.display
                    ? <button className="likeButton" onClick={this.handleClick}><img className="greenCheck" src="https://i.ibb.co/k59B2vc/Green-check.png" alt="green check" /></button>   
                    : null
                } 
            </div>
        )
    }
}

export default Pet
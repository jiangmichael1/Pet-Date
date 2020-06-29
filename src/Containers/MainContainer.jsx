import React from 'react';
import UserContainer  from './UserContainer';
import PetContainer from './PetContainer';
import ACContainer from './ACContainer';
import Home from '../Components/Home'
import LikedPetDisplayContainer from './LikedPetDisplayContainer'
import { Route, Switch } from 'react-router-dom'
const baseUrl = 'http://localhost:3001'

export default class MainContainer extends React.Component{
    
    state={
        pets:[],
        user: {},
        likedPets: [], //join table user and pets
    }

    fetchAllPets = () => {
        fetch(`${baseUrl}/pets`)
            .then(r => r.json())  
            .then(pets => 
                this.setState({
                    pets:pets
                })
            ) 
    }

    fetchAllUsers = () => {
        fetch(`${baseUrl}/users/1`)
            .then(r => r.json())  
            .then(users => 
                this.setState({
                user:users
                })
            )
    }

    fetchUserLikedPets = () => {
        fetch(`${baseUrl}/liked_pets`)
            .then(r => r.json())
            .then(pets => {
                pets.map(pet => {
                    if (pet.user_id === 1){
                        const currentLikedPets = [...this.state.likedPets, pet]
                        this.setState({
                            likedPets: currentLikedPets
                        })
                    }
                })
            })
    }

    setFilteredPets = () => {
        //setFilteredPet will sort for the pets that are not in likedPets array and render only the new pets
        const petIdArray = this.state.likedPets.map(pet => pet.id)
        const newFilteredPets = this.state.pets.filter(pet => !petIdArray.includes(pet.id)) 
        return newFilteredPets
    }

    setLikedPets = () => {
        const likedPetsArray = this.state.likedPets.filter(pet => pet.like === "Liked")
        const likedPetsIds = likedPetsArray.map(pet => pet.id)
        const newLikedPets = this.state.pets.filter(pet => likedPetsIds.includes(pet.id)) 
        return newLikedPets 
    }


    addToLikedPetsArray = (petObj) => {
        const newLikedPetsArray = [...this.state.likedPets, petObj]
        this.setState({
            likedPets: newLikedPetsArray
        })
    }

    componentDidMount(){
        this.fetchAllPets()
        this.fetchAllUsers()
        this.fetchUserLikedPets()

    }
    
    render(){
        console.log(this.state.livePetData)
        return(
            <React.Fragment>
                
                <Switch>
                    <Route path="/adoption_centers" component={ACContainer} />
                    
                    <Route path="/users"render={(routerProps) => 
                        <UserContainer {...routerProps} 
                            user={this.state.user} 
                        />} 
                    />

                    <Route path="/liked_pets"render={(routerProps) => 
                        <LikedPetDisplayContainer {...routerProps} 
                            likedPets={this.setLikedPets()}
                        />} 
                    />
                    
                    <Route path="/pets" render={(routerProps) => 
                        <PetContainer {...routerProps} 
                            userId= {this.state.user.id} 
                            pets={this.setFilteredPets()} 
                            likedPets={this.state.likedPets}
                            addLikedPet={this.addToLikedPetsArray}
                        />} 
                    />

                    <Route exact path="/" render={(routerProps) => 
                        <Home {...routerProps} 
                            pets={this.state.pets} 
                        />} 
                    />
                </Switch>
            </React.Fragment>
        )
    }
}
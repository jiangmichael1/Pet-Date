import React from 'react';
import UserContainer  from './UserContainer';
import PetContainer from './PetContainer';
import ACContainer from './ACContainer';
import Home from '../Components/Home'
import LikedPetDisplayContainer from './LikedPetDisplayContainer'
import { Route, Switch } from 'react-router-dom'
import Header from '../Components/Header'
import ACPetsContainer from './ACPetsContainer';
const baseUrl = 'http://localhost:3001'

export default class MainContainer extends React.Component{
    
    state={
        pets:[],
        user: {},
        likedPets: [],
        acs: [],
        loggedIn: "user",
        acPets: []
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

    fetchAllAdoptionCenters = () => {
        fetch(`${baseUrl}/adoption_centers`)
            .then(r => r.json())
            .then(acs => 
                this.setState({
                    acs: acs
                }))
            this.fetchAdoptionCenterPets()
    }

    fetchAdoptionCenterPets = () => {
        fetch(`${baseUrl}/adoptable_pets`)
            .then(r => r.json())
            .then(acPets => {
                let acPetsList = acPets.filter(pet => pet.adoption_center_id === 1) 
                let acPetsId = acPetsList.map(pet => pet.pet_id)
                let acOwnedPets = this.state.pets.filter(pet => acPetsId.includes(pet.id))    
                this.setState({
                    acPets: acOwnedPets
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
        this.fetchAllAdoptionCenters()
        this.fetchAdoptionCenterPets()
    }
    
    render(){
        return(
            <React.Fragment>
                <Header 
                    loggedIn={this.state.loggedIn}
                />
                <Switch>
                    <Route path="/adoption_centers" render={(routerProps) =>
                        <ACContainer {...routerProps} 
                            acs={this.state.acs}
                        />}
                    />
                     
                    <Route path="/adoption_center_pets" render={(routerProps) => 
                        <ACPetsContainer {...routerProps} 
                            acPets={this.state.acPets}
                        />} 
                    />

                    <Route path="/users" render={(routerProps) => 
                        <UserContainer {...routerProps} 
                            user={this.state.user} 
                        />} 
                    />

                    <Route path="/liked_pets" render={(routerProps) => 
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
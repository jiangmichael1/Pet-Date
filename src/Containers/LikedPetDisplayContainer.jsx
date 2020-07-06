import React from 'react'
import LikedPetDisplay from '../Components/LikedPetDisplay'
import SearchBar from '../Components/SearchBar'
import Pet from '../Components/Pet'


class LikedPetDisplayContainer extends React.Component{
    state = {
        searchTerm: '',
        pet: {}
    }

    handleSearchTerm = (searchTerm) => {
        this.setState({
          searchTerm: searchTerm
        })
    }

    filteredLikedPets = () => {
        const likedPets = this.props.likedPets.filter(pet => {
            return pet.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
        })
        return likedPets
    }

    setDisplayPet = (pet) => {
        this.setState({
            pet: pet
        })
    }

    render(){
        return ( 
            <div className="likedPetsDisplay">
                <h1> My Liked Pets</h1>
                <div className="likedPetsDisplayContainer">
                    <div className="likedPetsList">
                        <SearchBar
                            searchTerm={this.state.searchTerm}
                            handleSearchTerm={this.handleSearchTerm} 
                        />
                        <div>
                            {this.filteredLikedPets().map(pet => <LikedPetDisplay 
                                key={pet.id} 
                                displayPet={this.setDisplayPet}
                                pet={pet}
                            />)}
                            {/* {this.filteredLikedPets().map(pet => 
                                <div key={pet.id} className="likedPet">
                                    <h5>{pet.name}</h5>
                                </div>
                            )} */}
                        </div>
                    </div>
                    <div>
                        {<Pet key={this.state.pet.id} pet={this.state.pet} display={"likedPets"} />}
                    </div>
                    
                </div>
                
            </div>
        )
    }
}
 
export default LikedPetDisplayContainer;
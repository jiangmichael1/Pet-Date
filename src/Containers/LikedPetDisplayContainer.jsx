import React from 'react'
import LikedPetDisplay from '../Components/LikedPetDisplay'
import SearchBar from '../Components/SearchBar'


class LikedPetDisplayContainer extends React.Component{
    state = {
        searchTerm: ''
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

    render(){
        return ( 
            <React.Fragment>
                <h1> My Liked Pets</h1>
                <div className="likedPetsDisplayContainer">
                    <SearchBar
                        searchTerm={this.state.searchTerm}
                        handleSearchTerm={this.handleSearchTerm}
                           
                    />
                    <div>
                        {this.filteredLikedPets().map(pet => 
                            <LikedPetDisplay key={pet.id} pet={pet}/>
                        )}
                    </div>
                </div>
                
            </React.Fragment>
        )
    }
}
 
export default LikedPetDisplayContainer;
import React from 'react';
import { Link } from 'react-router-dom'

const NavBar = props => {
    return(
        <div className="navBar">
            <Link to="/"> Home </Link>
            <Link to="/pets"> Find A Pet Date </Link>
            <Link to="/liked_pets"> My Liked Pets </Link>
            <Link to="/users"> My Profile </Link>
            <Link to="/adoption_centers"> Adoption Centers </Link>

        </div>
    )
}

export default NavBar
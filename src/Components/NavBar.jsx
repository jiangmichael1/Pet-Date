import React from 'react';
import { Link } from 'react-router-dom'

const NavBar = props => {
    return(
        <div >
            { 
                (props.loggedIn === "user")
            ? 
                <div className="navBar">
                    <Link to="/"> Home </Link>
                    <Link to="/pets"> Find A Pet Date </Link>
                    <Link to="/liked_pets"> My Liked Pets </Link>
                    <Link to="/users"> My Profile </Link>
                </div>
            :
                <div className="navBar">
                    <Link to="/"> Home </Link>
                    <Link to="/adoption_center_pets"> View Currently Owned Pets </Link>
                    <Link to="/liked_pets"> View User Profiles </Link>
                    <Link to="/users"> Adoption Center Profile </Link>
                </div>
            }
            {/* <Link to="/adoption_centers"> Adoption Centers </Link> */}
        </div>
    )
}

export default NavBar
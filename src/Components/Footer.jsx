import React from 'react';
import NavBar from './NavBar'
import { Link } from 'react-router-dom'

export default class Header extends React.Component {
    render(){
        return(
            <React.Fragment>
                <div className="footer">
                    <p className="copyrightMessage"> © 2020 www.petdate.com All Rights Reserved</p>
                    <div className="footerLinks">
                        <Link to="/adoption_centers">Adoption Centers</Link>
                        <p> Adoption Center Sign In</p>
                        <p> Terms of Service </p>
                        <p> Contact Us</p>
                        <p> About</p>
                    </div>
                    <Link to="/"><img className="footerLogo" src="https://i.ibb.co/FJCMYLL/PD-Footer.png" alt="Pet Date Logo"/></Link>
                </div>
            </React.Fragment>
        )
    }
}
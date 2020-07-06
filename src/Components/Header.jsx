import React from 'react';
import NavBar from './NavBar'
import { Link } from 'react-router-dom'

export default class Header extends React.Component {
    render(){
        return(
            <div>
                <div className="header">
                    <span className="logoColorFix">
                        <Link to="/"><img className="logo" src="https://i.ibb.co/vcFwStj/PD-Logo.png" alt="Pet Date Logo"/></Link>
                        <Link to="/pets"><img className="catStencil" src="https://i.ibb.co/9nJSjVj/cat.png" alt="Cat Stencil Art"/></Link>
                        <Link to="/liked_pets"><img className="logoStencil" src="https://i.ibb.co/ypzNM1y/PET-DATE.png" alt="Logo Stencil Art"/></Link>
                        <Link to="/users"><img className="dogStencil" src="https://i.ibb.co/pKw3T3V/dog-Stencil.png" alt="Dog Stencil Art"/></Link>
                    </span>
                </div>
                    <NavBar 
                        loggedIn={this.props.loggedIn}
                    />
            </div>
        )
    }
}
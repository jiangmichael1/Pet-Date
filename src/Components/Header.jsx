import React from 'react';
import NavBar from './NavBar'

export default class Header extends React.Component {
    render(){
        return(
            <React.Fragment>
                <div className="header">
                    <img className="logo" src="https://i.ibb.co/vcFwStj/PD-Logo.png" alt="Pet Date Logo"/>
                    <img className="catStencil" src="https://i.ibb.co/9nJSjVj/cat.png" alt="Cat Stencil Art"/>
                    <img className="dogStencil" src="https://i.ibb.co/hKjQdvc/dog.png" alt="Dog Stencil Art"/>
                    <NavBar />
                </div>
            </React.Fragment>
        )
    }
}
import React from 'react';
import './Navigation.css';
import { withRouter } from 'react-router-dom';

const Navigation = (props) => {
    let WristWatch = require('../../Images/WristWatch.jpg');
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent mx-5">
            <a className="navbar-brand header-name text-white" href="/Home">
                <img src={WristWatch.default} width="30" height="30" className="d-inline-block align-center mt-1 mr-1" alt=""/>
                <span className="align-bottom ml-1">Watch Catalog</span>
            </a>
            <a className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Navigations">
                <span className="navbar-toggler-icon"></span>
            </a>
            <div className="collapse navbar-collapse subheader-name justify-content-end" id="navbarText">
                <ul className="navbar-nav text-center">
                    <li className="nav-item">
                        <a className="nav-link text-white" href="/FAQs">FAQs</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="/About">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="/Login">Sign In</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="/Register">Register</a>
                    </li>
                </ul>
            </div>
        </nav >
    )
}

export default withRouter(Navigation);
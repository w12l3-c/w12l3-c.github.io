import React from "react";

import Navbar from './pages/Navbar.js';
import Footer from './pages/Footer.js';

import './Hobbies.css';

function Hobbies() {
    return(
        <div className="main">
            <Navbar />
            <h1>Hobbies</h1>
            <p>
                Yes I have a life
                (In Maintenance Currently)
            </p>
            <div className="bar"><h1>Maintenance</h1></div>
            
            <Footer />
        </div>
    )
}

export default Hobbies;
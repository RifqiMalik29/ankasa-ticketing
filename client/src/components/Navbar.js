import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import AnkasaLogo from '../images/ankasa-blue.svg';
import SearchLogo from '../images/search.svg';
import ActiveBar from '../images/active-bar.svg';

const Navbar = () => {
    const isSignup = true;
    const [isActive, setIsactive] = useState(true);

    return (
        <div className="navbar">
            <div className="navbar-container container">
                <div className="">
                    <p className="ankasa"><img src={AnkasaLogo} alt="Ankasa Logo" className="ankasa-icon" />Ankasa</p>
                </div>
                <div className="middle-navbar">
                    <div className="input-bg">
                        <img src={SearchLogo} alt="Search Logo" className="search-logo" />
                        <input placeholder="Where you want to go?" className="search-bar" />
                    </div>
                    <div className="navbar-link mt-2">
                        <div className={isActive ? "active-link mx-5" : "unactive-link mx-5"} onClick={() => setIsactive(true)}>
                            <p className="">Find Ticket</p>
                            {isActive && <img src={ActiveBar} alt="Active Bar" className="active-bar" />}
                        </div>
                        <div className={isActive ? "unactive-link" : "active-link"} onClick={() => setIsactive(false)}>
                            <p>My Booking</p>
                            {isActive ? null : <img src={ActiveBar} alt="Active Bar" className="active-bar" />}
                        </div>
                    </div>
                </div>
                {
                    isSignup ? (
                        <Link to="/auth" className="navbar-signup">Sign up</Link>
                    ) : (
                        <p>User Profile</p>
                    )
                }
            </div>
        </div>
    )
}

export default Navbar

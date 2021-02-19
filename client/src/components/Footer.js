import React from 'react';

import AnkasaLogo from '../images/ankasa-blue.svg';
import GooglePlay from '../images/google-play.svg';
import AppStore from '../images/app-store.svg';
import Facebook from '../images/facebook-footer.svg';
import Twitter from '../images/twitter.svg';
import Instagram from '../images/instagram.svg';
import Youtube from '../images/youtube.svg';
import MapPin from '../images/map-pin.svg';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container footer-container">
                <div className="footer1-container">
                    <div className="footer1-item">
                        <p className="ankasa"><img src={AnkasaLogo} alt="Ankasa Logo" className="ankasa-icon" />Ankasa</p>
                        <p className="ankasa-desc pt-3">Find your Flight and explore the <br /> world with us. We will take care of the rest</p>
                    </div>
                    <p className="reserved">© Ankasa.  All Rights Reserved.</p>
                </div>
                <div className="footer2-container">
                    <p className="feature">Features</p>
                    <div className="footer2-item">
                        <p className="features">Find Ticket</p>
                        <p className="features">My Booking</p>
                        <p className="features">Chat</p>
                        <p className="features">Notification</p>
                    </div>
                </div>
                <div className="footer3-container">
                    <p className="feature">Download Ankasa app</p>
                    <img src={GooglePlay} alt="Google Play" className="mb-3 mt-3" />
                    <img src={AppStore} alt="App Store" />
                </div>
                <div className="footer4-container">
                    <p className="feature">Follow Us</p>
                    <div className="footer4-item pt-3">
                        <img src={Facebook} alt="Facebook" className="ml-2" />
                        <img src={Twitter} alt="Twitter" className="mx-4" />
                        <img src={Instagram} alt="Instagram" className="mr-4" />
                        <img src={Youtube} alt="Youtube" />
                    </div>
                    <div className="location">
                        <img src={MapPin} alt="Map Pin" />
                        <p className="location-detail pt-3">Jakarta Indonesia</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer

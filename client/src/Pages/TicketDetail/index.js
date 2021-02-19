import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import validator from 'validator';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import UserDetail from '../../components/UserDetail';

import LeftArrow from '../../images/left-arrow.svg';

const TicketDetail = ({ currentId, setCurrentId }) => {
    const ticket = useSelector(state => (currentId ? state.ticket.find((message) => message._id === currentId) : null));
    const history = useHistory();

    const backHandler = () => {
        setCurrentId(0);
        history.goBack();
    };

    return (
        <div className="home">
            <Navbar />
            <div className="blue-bg">
                <div className="flight-details mx-auto py-5">
                    <div className="d-flex mr-auto">
                        <button className="back-button">
                            <img onClick={backHandler} src={LeftArrow} alt="Back" className="left-arrow my-auto mr-3" />
                        </button>
                        <p className="contact-text my-auto">Contact Person Details</p>
                    </div>
                    <div className="d-flex ticket-detail">
                        <p className="contact-text mr-auto my-auto">Flight Details</p>
                        <p className="search my-auto">View Details</p>
                    </div>
                </div>
            </div>
            <div className="detail-bg py-4 px-4 my-3">
                <UserDetail label="Full Name" value="Mike Kowalski" type="text" />
                <UserDetail label="Email" value="email" type="email" />
                <UserDetail label="Phone Number" value="81987654321" type="number" />
            </div>
            {/* <p>{emailError}</p> */}
            <Footer />
        </div>
    )
}

export default TicketDetail

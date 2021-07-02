import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import validator from 'validator';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import UserDetail from '../../components/UserDetail';
import Benefit from '../../components/Benefit';

import LeftArrow from '../../images/left-arrow.svg';
import GarudaAirlines from '../../images/garudaAirlines.svg';
import AnkasaGrey from '../../images/ankasa-grey.svg';
import EllipseGrey from '../../images/ellipse-grey.svg';
import BlueTick from '../../images/blue-tick.svg';
import ArrowDown from '../../images/arrow-down.svg';
import ArrowUp from '../../images/arrow-up.svg';
import Warning from '../../images/warning.svg';

const TicketDetail = ({ currentId, setCurrentId }) => {
    const ticket = useSelector(state => (currentId ? state.ticket.find((message) => message._id === currentId) : null));
    const user = useSelector(state => state.user);
    const history = useHistory();

    const backHandler = () => {
        setCurrentId(0);
        history.goBack();
    };

    return (
        <div className="home">
            <Navbar />
            <div className="blue-bg mb-4">
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
            <div className="d-flex">
                <div className="detail-bg py-4 px-4 my-3 mx-3">
                    <UserDetail label="Full Name" value={user.data.username} type="text" />
                    <UserDetail label="Email" value={user.data.email} type="email" />
                    <UserDetail label="Phone Number" value={user.data.phone} type="number" option="+62" border={true} />
                    <div className="warning-bg mt-4">
                        <img src={Warning} alt="Warning" className="ml-2" />
                        <p className="warning-txt my-auto">Make sure the customer data is correct.</p>
                    </div>
                </div>
                <div className="detailTicket-bg pt-3 my-3 mx-3">
                    <div className="d-flex px-4 mb-4">
                        <img src={GarudaAirlines} alt="Airline's image" className="mr-4" />
                        <p className="time-length my-auto">Garuda Indonesia</p>
                    </div>
                    <div className="d-flex px-4 mb-4">
                        <p className="ticket-destination my-auto">Medan (IDN)</p>
                        <img src={AnkasaGrey} alt="FLight" className="mx-3" />
                        <p className="ticket-destination my-auto">Tokyo (JPN)</p>
                    </div>
                    <div className="d-flex px-4 mb-4">
                        <p className="ticket-date my-auto">Sunday, 15 August 2020</p>
                        <img src={EllipseGrey} alt="ellipse" className="mx-3" />
                        <p className="ticket-date my-auto">12:33 - 15:21</p>
                    </div>
                    <Benefit ImageSrc={BlueTick} BenefitName="Refundable" />
                    <Benefit ImageSrc={BlueTick} BenefitName="Can reschedule" />
                    <div className="input-border"></div>
                    <div className="d-flex px-4 mt-3">
                        <p className="mr-auto ticket-destination">Total Payment</p>
                        <div className="d-flex">
                            <p className="total-payment">$ 145,00</p>
                            <img src={ArrowDown} className="ticketDetail-arrow" />
                        </div>
                    </div>
                </div>
            </div>
            <h1 className="py-2 px-4 home-bold">Passenger Details</h1>
            <div className="detail-bg py-4 px-4 my-3 mx-3">
                <div className="passenger-bg d-flex mb-4">
                    <p className="my-auto ml-4 passengers-details">Passenger : 1 Adult</p>
                    <div className="d-flex align-items-center ml-auto mr-4">
                        <p className="mr-3 passengers-details my-auto">Same as contact person</p>
                        <div className="toggle-bg">
                            <div className="toggle"></div>
                        </div>
                    </div>
                </div>
                <UserDetail label="Title" option="Mr" border={false} />
                <UserDetail label="Full Name" type="text" value={user.data.username}  />
                <UserDetail label="Nationality" option="Indonesia" border={false} />
            </div>
            <h1 className="py-2 px-4 home-bold">Passenger Details</h1>
            <div className="">
                <div className="detail-bg py-4 px-4 my-3 mx-3">
                    <div className="d-flex">
                        <div className="travel-checkbox mr-auto">
                            <div className="cekbox"></div>
                            <p className="ticket-destination">Travel Insurance</p>
                        </div>
                        <div className="">
                            <p className="d-flex pax">$ 2,00<p className="pax-text">/pax</p></p>
                        </div>
                    </div>
                    <div className="input-border"></div>
                    <p className="filter-type mt-3">Get travel compensation up to $ 10.000,00</p>
                </div>
                <button type="submit" className="payment-btn file payment-button">Procced to Payment</button>
            </div>
            <Footer />
        </div>
    )
}

export default TicketDetail

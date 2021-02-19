import React, { useState } from "react";
import { Link } from 'react-router-dom';

import AnkasaGrey from "../images/ankasa-grey.svg";
import Suitcase from "../images/suitcase.svg";
import Hamburger from "../images/hamburger.svg";
import Wifi from "../images/wifi.svg";
import GarudaAirlines from '../images/garudaAirlines.svg';
import ArrowDown from '../images/arrow-down.svg';
import ArrowUp from '../images/arrow-up.svg';

const Ticket = ({ ticket, currentId, setCurrentId }) => {

  let result = ticket.facilities.sort().map((item) => {
    return item.split(', ')
  });

  const [detail, setDetail] = useState(false);

  const handleCurrentId = () => {
    setCurrentId(ticket._id)
  };

  return (
    <div className="ticket-bg py-3 px-4 mb-3">
      <div className="d-flex align-items-center">
        <img src={GarudaAirlines} alt="Default Image" />
        <p className="airlines-name ml-4 my-auto">{ticket.airlines}</p>
      </div>
      <div className="d-flex align-items-center justify-content-around">
        <div className="d-flex">
          <div className="mt-2">
            <p className="initialName">
              IDN
              <p className="airline-time">{ticket.departureTime}</p>
            </p>
          </div>
          <img className="mx-3 mb-4" src={AnkasaGrey} alt="Ankasa Grey" />
          <div className="mt-2 d-flex flex-column">
            <p className="initialName">
              JPN
              <p className="airline-time">{ticket.timeArrived}</p>
            </p>
          </div>
        </div>
        <div className="mt-2">
          <p className="time-length">
            {ticket.flightTime.split(',')[0]} hours {ticket.flightTime.split(',')[1]} minutes
            <p className="airline-time">(1 transit)</p>
          </p>
        </div>
        <div className="my-auto">
          {result[0][0] == 'Wi-fi' ? <img src={Wifi} alt="Wi-fi" className="mr-3" /> : <img className="" />}
          {result[0][2] == 'meal' ? <img src={Hamburger} className="mr-3" alt="In-Flight Meal" /> : <img className="" />}
          {result[0][1] == 'luggage' && <img src={Suitcase} alt="Luggage" />}
        </div>
        <div>
          <p className="ticket-price my-auto">
            $ {ticket.price} <p className="time-length">/pax</p>
          </p>
        </div>
        <button onClick={handleCurrentId} className="select-ticket my-auto">
          Select
        </button>
      </div>
      <div className="">
        <div className="d-flex align-items-center">
          <p className="details mr-3 my-auto">View Details</p>
          <img onClick={() => setDetail(!detail)} className="arrow" src={detail ? ArrowUp : ArrowDown} alt="Arrow Detail" />
        </div>
        <p>{detail && ticket._id}</p>
      </div>
    </div>
  );
};

export default Ticket;

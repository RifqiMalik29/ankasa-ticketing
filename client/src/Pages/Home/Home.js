import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getTickets } from '../../redux/actions/ticket';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Filter from '../../components/Filter';
import Ticket from '../../components/Ticket';

import TicketDetail from '../TicketDetail';

import AnkasaWhite from '../../images/ankasa-white.svg';
import Arrow from '../../images/arrow.svg';
import Ellipse from '../../images/ellipse.svg';
import ArrowUpDown from '../../images/arrow-up-down.svg';

const Home = () => {
    const transitName = [
        {id: 0, name: 'Direct'},
        {id: 1, name: 'Transit'},
        {id: 2, name: 'Transit 2x'}
    ];

    const facilitiesName = [
        {id: 0, name: 'Luggage'},
        {id: 1, name: 'In-Flight Meal'},
        {id: 2, name: 'Wi-fi'}
    ];

    const departureTime = [
        {id: 0, name: '00:00 - 06:00'},
        {id: 1, name: '06:00 - 12:00'},
        {id: 2, name: '12:00 - 18:00'},
        {id: 3, name: '18:00 - 24:00'}
    ];

    const timeArrived = [
        {id: 0, name: '00:00 - 06:00'},
        {id: 1, name: '06:00 - 12:00'},
        {id: 2, name: '12:00 - 18:00'},
        {id: 3, name: '18:00 - 24:00'}
    ];

    const airlinesName = [
        {id: 0, name: "Garuda Indonesia"},
        {id: 1, name: "Air Asia"},
        {id: 2, name: "Lion Air"},
    ];

    const [currentId, setCurrentId] = useState(0);
    const [transit, setTransit] = useState(false);
    const [facilities, setFacilities] = useState(false);
    const [departure, setDeparture] = useState(false);
    const [arrived, setArrived] = useState(false);
    const [airlines, setAirlines] = useState(false);
    const [isCheckboxActive, setIsCheckboxActive] = useState(false);

    const dispatch = useDispatch();
    const ticket = useSelector((state) => state.ticket);

    console.log(currentId);

    useEffect(() => {
        dispatch(getTickets());
    }, [currentId, dispatch]);

    const filterCheckbox = () => {
        setIsCheckboxActive(!isCheckboxActive);
    };

    const transitHandler = () => {
        setTransit(!transit);
    };

    return (
            currentId ? (
                <TicketDetail setCurrentId={setCurrentId} currentId={currentId} />
            ) : (
        <div className="home">
            <Navbar />
            <div className="blue-bg py-4">
                <div className="home-blue mr-auto">
                    <div>
                        <img src={AnkasaWhite} alt="Ankasa White" className="mr-4" />
                    </div>
                    <div>
                        <div class="blue-container">
                            <p className="mr-auto">From</p>
                            <p>To</p>
                        </div>
                        <div className="destination">
                            <p>Medan (IDN) <img src={Arrow} alt="Arrow" className="mx-4" /> Tokyo (JPN)</p>
                        </div>
                        <div className="date">
                            {/* tanggal tiket dibeli, jumlah passenger, kelas penerbangan */}
                            <p>Monday, 20 July 20</p> <img src={Ellipse} alt="Ellipse" className="mx-2 mb-3" /> <p>6 passenger</p> <img src={Ellipse} alt="Ellipse" className="mx-2 mb-3" /> <p>Economy</p>
                        </div>
                    </div>
                </div>
                <p className="search">Change Search</p>
            </div>
            <div>
                <div className="home-container mx-auto">
                    <div className="filter-container">
                        <div className="filter-text">
                            <p className="mr-auto home-bold">Filter</p>
                            <p className="reset mr-4">Reset</p>
                        </div>
                        <div className="filter-box">
                            <Filter type="Transit" transit={transit} transitName={transitName} filterCheckbox={filterCheckbox} isCheckboxActive={isCheckboxActive} transitHandler={transitHandler} />
                            <Filter type="Facilities" transit={facilities} transitName={facilitiesName} filterCheckbox={filterCheckbox} isCheckboxActive={isCheckboxActive} transitHandler={() => setFacilities(!facilities)} />
                            <Filter type="Departure Time" transit={departure} transitName={departureTime} filterCheckbox={filterCheckbox} isCheckboxActive={isCheckboxActive} transitHandler={() => setDeparture(!departure)} />
                            <Filter type="Time Arrived" transit={arrived} transitName={timeArrived} filterCheckbox={filterCheckbox} isCheckboxActive={isCheckboxActive} transitHandler={() => setArrived(!arrived)} />
                            <Filter type="Airlines" transit={airlines} transitName={airlinesName} filterCheckbox={filterCheckbox} isCheckboxActive={isCheckboxActive} transitHandler={() => setAirlines(!airlines)} />
                        </div>
                    </div>
                    <div className="ticket-container">
                        <div className="ticket-text">
                            <p className="home-bold">Select Ticket</p>
                            <p className="mr-auto mt-2 ml-2 ticket">({ticket.length} ticket found)</p>
                            <p className="sortBy">Sort by <img src={ArrowUpDown} alt="Arrow Up and Down" className="ml-3" /></p>
                        </div>
                        {ticket.map((item) => {
                            return <Ticket currentId={currentId} ticket={item} setCurrentId={setCurrentId} />
                        })}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
        )
    )
}

export default Home

import React from 'react';

const Benefit = ({ ImageSrc, BenefitName }) => {
    return (
        <div className="d-flex px-4 mb-3">
            <img src={ImageSrc} />
            <p className="ticket-price my-auto ml-3">{BenefitName}</p>
        </div>
    )
}

export default Benefit

import React from 'react';

import FilterBox from './FilterCheckbox';

import ArrowUp from '../images/arrow-up.svg';
import ArrowDown from '../images/arrow-down.svg';

const Filter = ({ type, transit, transitName, filterCheckbox, isCheckboxActive, transitHandler }) => {
    return (
        <div>
            <div className="d-flex align-items-center">
                <p className={transit ? "sortBy my-auto mr-auto" : "sortBy mr-auto mb-3"}>{type}</p>
                <img onClick={transitHandler} className={transit ? "arrow" : "arrow mb-3"} src={transit ? ArrowUp : ArrowDown} alt="Button" />
            </div>
            {transitName.map(item => (
            <FilterBox transit={transit} name={item.name} checkbox={isCheckboxActive} activeHandler={filterCheckbox} key={item.id} />
            ))}
            <div className="filter-border"></div>
        </div>
    )
}

export default Filter

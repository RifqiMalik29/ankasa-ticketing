import React from "react";

const FilterCheckbox = ({ transit, name, activeHandler, checkbox, key }) => {
  return (
    <div>
      {transit && (
        <div key={key} className="mt-4 mb-2 filter-type d-flex align-items-center">
          <p className="filter-type mr-auto">{name}</p>
          <div
            onClick={activeHandler}
            className={checkbox ? "filter-checkbox-active" : "filter-checkbox"}
          ></div>
        </div>
      )}
    </div>
  );
};

export default FilterCheckbox;

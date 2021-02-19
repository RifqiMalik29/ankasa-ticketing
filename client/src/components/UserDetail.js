import React from "react";

const UserDetail = ({ label, value, type, onChange }) => {
  return (
      <form className="d-flex flex-column user-form">
        <label className="label">{label}</label>
        {type == "number" ? (
            <div className="">
                <select className="select-region">
                    <option className="pl-3" value="IDN">+62</option>
                </select>
                    <input className="user-detail phone-border mb-3" type={type} value={value} />
            </div>
        ) : (
            <input className="user-detail mb-3" type={type} value={value} onChange={onChange} />
        )}
      </form>
  );
};

export default UserDetail;

import React from 'react';
import { Button, TextField } from '@material-ui/core';

const Input = ({ name, placeholder, type, handleChange, className }) => {
    return (
        <div className="input-border">
            <input name={name} type={type} onChange={handleChange} placeholder={placeholder} className={className} />
        </div>
    )
}

export default Input

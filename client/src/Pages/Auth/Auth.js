import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

import AnkasaBacground from '../../images/ankasa-bg.svg';
import AnkasaIcon from '../../images/ankasa-blue.svg';
import GoogleIcon from '../../images/google.svg';
import FacebookIcon from '../../images/facebook.svg';
import Input from '../../components/Input';

const Auth = () => {
    const initialState = { fullName: '', email: '', password: '' };
    const [isSignup, setIsSignup] = useState(true);
    const [formData, setFormData] = useState(initialState);
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name] : e.target.value})
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    };

    console.log(formData);
    return (
        <Grid container spacing={0}>
            <div>
                <img src={AnkasaBacground} alt="Ankasa Background" />
            </div>
            <div className="form-container mx-auto">
                <div className="mt-3">
                    <p className="ankasa"><img src={AnkasaIcon} alt="Ankasa Icon" className="ankasa-icon" />Ankasa</p>
                </div>
                    {isSignup ? (
                        <div className="form">
                            <p className="form-type">Register</p>
                            <form onSubmit={handleSubmit}>
                                <Input name="fullName" placeholder="Full Name" type="text" onChange={handleChange} className="input" isSignup={isSignup} handleSubmit={handleSubmit} />
                                <Input name="email" placeholder="Email" type="email" onChange={handleChange} className="input" isSignup={isSignup} handleSubmit={handleSubmit} />
                                <Input name="password" placeholder="Password" type={showPassword ? "text" : "password"} onChange={handleChange} className="input" />
                                <button type="submit" className="button">
                                    {isSignup ? 'Sign Up' : 'Sign In'}
                                </button>
                                <label className="terms"> Accept terms and condition
                                    <input type="checkbox" className="checkbox mr-3" />
                                    <span className="checkmark my-auto"></span>
                                </label>
                            </form>
                            <div className="line mx-auto">
                                <p className="line-content mx-auto">Already have an account?</p>
                            </div>
                            <button type="button" onClick={() => setIsSignup(false)} className="signin-button">
                                Sign In
                            </button>
                        </div>
                    ) : (
                        <div className="form">
                            <p className="form-type">Login</p>
                            <form onSubmit={handleSubmit}>
                                <Input name="fullName" placeholder="Username" type="text" onChange={handleChange} className="input" isSignup={isSignup} handleSubmit={handleSubmit} />
                                <Input name="password" placeholder="Password" type={showPassword ? "text" : "password"} onChange={handleChange} className="input" />
                                <button type="submit" className="button">
                                    {isSignup ? 'Sign Up' : 'Sign In'}
                                </button>
                                <p className="forgot">Did you forgot your password?</p>
                                <div className="forgot-container">
                                    <Link to="/forgot" className="forgot-link">Tap here for reset</Link>
                                </div>
                            </form>
                            <div className="line mx-auto">
                                <p className="line-content mx-auto">Don't have an account?</p>
                            </div>
                            <button type="button" onClick={() => setIsSignup(true)} className="signin-button">
                                Sign Up
                            </button>
                            <p className="line-content text-center mt-4">or sign in with</p>
                            <div className="third-login">
                                <div><img src={GoogleIcon} alt="Google Icon" className="google mr-4" /></div>
                                <div><img src={FacebookIcon} alt="Facebook Icon" className="facebook" /></div>
                            </div>
                        </div>
                    )}
            </div>
        </Grid>
    )
}

export default Auth

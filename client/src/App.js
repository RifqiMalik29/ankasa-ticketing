import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Auth from './Pages/Auth/Auth';
import Home from './Pages/Home/Home';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path="/auth" exact component={Auth} />
                <Route path="/" exact component={Home} />
            </Switch>
            <Footer />
        </BrowserRouter>
    )
}

export default App

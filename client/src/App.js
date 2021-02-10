import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Auth from './Pages/Auth/Auth';
import Home from './Pages/Home/Home';

import Navbar from './components/Navbar';

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path="/auth" exact component={Auth} />
                <Route path="/" exact component={Home} />
            </Switch>
        </BrowserRouter>
    )
}

export default App

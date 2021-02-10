import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Auth from './Pages/Auth/Auth';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Auth} />
            </Switch>
        </BrowserRouter>
    )
}

export default App

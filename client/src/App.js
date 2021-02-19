import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Auth from './Pages/Auth/Auth';
import Home from './Pages/Home/Home';
import TicketDetail from './Pages/TicketDetail';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/auth" exact component={Auth} />
                <Route path="/" exact component={Home} />
                <Route path="/detail" exact component={TicketDetail} />
            </Switch>
        </BrowserRouter>
    )
}

export default App

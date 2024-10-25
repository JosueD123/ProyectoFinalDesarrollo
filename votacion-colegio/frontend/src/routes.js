import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Admin from './components/Admin';
import Voting from './components/Voting';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <Route path="/admin" component={Admin} />
                <Route path="/voting" component={Voting} />
                <Route path="/" exact component={Login} /> {/* Página de inicio */}
            </Switch>
        </Router>
    );
};

export default Routes;

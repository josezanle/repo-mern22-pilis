import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import {LoginScreen} from '../components/auth/LoginScreen';
import CalendarScreen from '../components/calendar/CalendarScreen';

const AppRouter = () => {
    return (
        <div>

            <Router>
                <Switch>
                    <Route exact path="/login" component={LoginScreen}/>
                    <Route exact path="/" component={CalendarScreen}/>
                    <Redirect to="/"/>
                </Switch>
            </Router>

        </div>
    )
}

export default AppRouter;

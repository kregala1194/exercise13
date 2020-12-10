import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Login from "./Shared/Login/Login";
import FAQs from "./FAQs/FAQs";
import About from "./About/About";
import Home from "./Home/Home";
import Details from "./Details/Details";
import history from './history';
import Register from "./Shared/Register/Register";

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/Home" exact component={Home} />
                    <Route path="/FAQs" component={FAQs} />
                    <Route path="/About" component={About} />
                    <Route path="/Login" component={Login} />
                    <Route path="/Register" component={Register} />
                    <Route path="/Details" component={Details} />
                </Switch>
            </Router>
        )
    }
}
import React from 'react';
import {Switch, Route} from "react-router-dom";
import Home from "./components/Home";
import Salons from "./components/Salons";
import About from "./components/About";


export default(
    <Switch>
        <Route path="/about" component={About} />
        <Route path="/salons" component={Salons} />
        <Route exact path="/" component={Home} />
    </Switch>

)
import React, {Component} from "react";
import {Link} from "react-router-dom";
import Carousel from "./Carousel";

class Home extends Component{
    render(){
        return(
            <main className="Home">
                <div className="homeDiv">     
                    <nav className="navBar">
                <li className="salonLogo">Salt Lake Salons</li>
                        <ul className="listBar">
                           <Link className="homeLink"to="/">
                        <li>Home</li>
                        </Link>
                            <Link className="aboutLink"to="/about">
                        <li>Rentals</li>
                        </Link>
                            <Link className="salonLink"to="/salons">
                        <li>Salons</li>
                        </Link>
                        </ul>
                    </nav>

                </div>
                <div>
                    <Carousel/>
                </div>
            </main>
            
        )
    }
}

export default Home;
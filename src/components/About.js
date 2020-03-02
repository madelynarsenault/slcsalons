import React, {Component} from "react";
import {Link} from "react-router-dom";


class About extends Component{
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
                    <div className="titlesRent">
                    <h1 className="rentTitle">Why Rent Salt Lake Salons?</h1>
                        <h2 className="moreBooth">Its more than just a booth...</h2>
                        </div>
                    <div className="rentList">
                        <li>Be completely independent</li>
                        <li>Full creativity with interior design</li>
                        <li>Laundry facilities</li>
                        <li>Upgraded WiFi for tenant use</li>
                        <li>State of the art security system</li>
                        <li>Short and long term leases</li>
                    </div>
                    <div className="contactDiv">
                        <h1 className="rentingTitle">Interested in renting from us?</h1>
                        <h2 className="contactInfo">Contact Jolie at 801-898-0086 for more information and pictures</h2>
                        <h2 className="addressTitle">363 500 E, Salt Lake City, UT 84111</h2>
                    </div>
                </main>
        )
    }
}

export default About;
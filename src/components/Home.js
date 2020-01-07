import React, {Component} from "react";
import {Link} from "react-router-dom"

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
                        <li>About</li>
                        </Link>
                            <Link className="salonLink"to="/salons">
                        <li>Salons</li>
                        </Link>
                        </ul>
                    </nav>

                </div>
            </main>
        )
    }
}

export default Home;
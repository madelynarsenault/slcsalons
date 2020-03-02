import React, {Component} from "react";
import {Link} from "react-router-dom";
import jessica from "./images/jessica.JPG";



class Salons extends Component{
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
            <h1 className="teamTitle">Salon Suites Businesses</h1>
            </div>   
            <div className="salonRenters">
          <div className="salonDivs">
          <h3 className='jessica-title'>Suite 106</h3>
          <p className="jessicaParagraph">
          Cosmetologist
          </p>
          </div>
          <div className="salonDivs">
          <h3 className='jessica-title'>Suite 107</h3>
          <a href="https://www.waxmetoo.com" className="wmtLink">Wax Me Too</a>
          </div>
          <div className="salonDivs">
          <h3 className='jessica-title'>Suite 108</h3>
          <a href="https://www.waxmetoo.com" className="wmtLink">Wax Me Too</a>
          </div>
          <div className="salonDivs">
          <h3 className='jessica-title'>Suite 109</h3>
          <p className="jessicaParagraph">
          Cosmetologist
          </p>
          </div>
          <div className="salonDivs">
          <h3 className='vacantSuite'>Suite 110</h3>
          <p className="vacantParagraph">
          VACANT CALL TO RENT 
          </p>
          </div>
          
          <div className="salonDivs">
          <h3 className='jessica-title'>Suite 111</h3>
          <p className="jessicaParagraph">
          Cosmetologist
          </p>
          </div>
          <div className="salonDivs">
          <h3 className='jessica-title'>Suite 112</h3>
          <p className="jessicaParagraph">
          Microblading
          </p>
          </div>
          <div className="salonDivs">
             <h3 className='jessica-title'>Suite 113</h3>
          <p className="jessicaParagraph">
          Cosmetologist
          </p>
          </div>
          <div className="salonDivs">
              <h3 className='jessica-title'>Suite 114</h3>
          <p className="jessicaParagraph">
          Esthetics 
          </p>
          </div>
          <div className="salonDivs">
          <h3 className='jessica-title'>Suite 107/108</h3>
          <p className="jessicaParagraph">
          Wax Me Too
          </p>
          </div>

            </div>             
            
        </main>
        )
    }
}

export default Salons;
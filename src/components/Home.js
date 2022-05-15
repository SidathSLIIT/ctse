import React, { Component } from 'react';
import Products_Normal from './Products_Normal';
import Sidebar from './Sidebar';
// import card1 from "../images/welcomecard1.png";
// import card2 from "../images/welcomecard2.png";
// import card3 from "../images/welcomecard3.png";
// import card4 from "../images/welcomecard4.png";

export default class Home extends Component {
    render() {
        return (
          <div>
            <div className="page-head">
              <Sidebar />
              <div className="page-header">
                <h1>
                  <a href="#">
                    <i className="fa fa-home"></i> &nbsp;&nbsp;Welcome
                  </a>
                </h1>
              </div>
            </div>
          
            <Products_Normal/>
           
          </div>
        );
      }
}

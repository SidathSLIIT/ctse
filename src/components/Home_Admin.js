import React, { Component } from 'react';
import Sidebar from './Sidebar_Admin';
import card1 from "../images/welcomecard1.png";
import card2 from "../images/welcomecard2.png";
import card3 from "../images/welcomecard3.png";
import card4 from "../images/welcomecard4.png";

export default class Home_Admin extends Component {
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
    
            <div className="cards-container" style={{marginTop: "10%"}}>
              <div className="cards">
                <a href="/customers">
                  <div className="cards-body">
                    <div className="card-container">
                      <img className="card-image" src={card1} alt="Card" />
                    </div>
                    <div className="card-details">
                      <h3>Customers</h3>
                      <p>View all the registered customers.</p>
                    </div>
                  </div>
                </a>
    
                <a href="/products">
                  <div className="cards-body">
                    <div className="card-container">
                      <img className="card-image" src={card2} alt="Card" />
                    </div>
                    <div className="card-details">
                      <h3>Products</h3>
                      <p>View current product details.</p>
                    </div>
                  </div>
                </a>
    
                <a href="/orders">
                  <div className="cards-body">
                    <div className="card-container">
                      <img className="card-image" src={card4} alt="Card" />
                    </div>
                    <div className="card-details">
                      <h3>Orders</h3>
                      <p>View all the orders customers purchased.</p>
                    </div>
                  </div>
                </a>
    
                <a href="/deliveries">
                  <div className="cards-body">
                    <div className="card-container">
                      <img className="card-image" src={card3} alt="Card" />
                    </div>
                    <div className="card-details">
                      <h3>Deliveries</h3>
                      <p>View all the delivery details.</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        );
      }
}

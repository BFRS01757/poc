import { useEffect } from "react";
import { createRoot } from 'react-dom/client';

import ReactDOM from "react-dom";

import "./index.css";

const App = ({ items = [{
  'date': "13.11.2016",
  'hour': "12:38",
  'description': "The shipment is ready to be picked up",
  "active": 0,
  'location': "biging"
}, {
  'date': "13.11.2016",
  'hour': "12:38",
  'description': "The shipment is ready to be picked up",
  "active": 0,
  'location': "biging"
}, {
  'date': "13.11.2016",
  'hour': "12:38",
  'description': "in transit",
  "active": 0,
  'location': "biging"
}, {
  'date': "13.11.2016",
  'hour': "12:38",
  'description': "The shipment delivered",
  "active": 1,
  'location': "biging"
},]  ,orderTitle = "Order #1893-1",status = "In transit"}) => {
  return <div className="background">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css"></link>
    <div className="container">
      <div className="row header text-center">
        <div className="col-xs-3 icon-back">
          <span className="glyphicon glyphicon-chevron-left"></span>
        </div>
        <div className="col-xs-6 order">
          <div className="order-number">
            {orderTitle}
          </div>
          <div className="order-status">
            {status}
          </div>
        </div>
        <div className="col-xs-3 icon-brand">
          <span className="glyphicon glyphicon-th"></span>
        </div>
      </div>
      <div className="row content">
        <div className="timeline">
          {
            items.map((ele,i) => (<div key={i} className={`item ${ele.active ? "active" : ""}`}>
              <div  className="item-label">
                <div className="item-label-date">
                  {ele.date}
                </div>
                <div className="item-label-hour">
                  {ele.hour}
                </div>
              </div>
              <div className="item-description">
                <div className="item-description-status">
                  {ele.description}
                </div>
                <div className="item-description-location">
                  {ele.location}
                </div>
              </div>
            </div>))
          }
        </div>
      </div>
    </div>
  </div>
};

createRoot(document.getElementById('app')).render(<App />);
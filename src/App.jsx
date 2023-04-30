import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import MyComp from "poc/MyComp.js"


const App = () => (
  <MyComp name='himanshu'/>
);
ReactDOM.render(<App />, document.getElementById("app"));

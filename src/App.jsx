import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import MyComp from "./MyComp";

const App = () => (
  <MyComp name='himanshu'/>
);
ReactDOM.render(<App />, document.getElementById("app"));

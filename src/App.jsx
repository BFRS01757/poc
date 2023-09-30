import { useEffect } from "react";
import { createRoot } from 'react-dom/client';

import ReactDOM from "react-dom";

import "./index.css";
import App2 from "./App2";

const App = ({ items, orderTitle, status }) => {
  return <App2 items={items} orderTitle={orderTitle} status={status} />
};

createRoot(document.getElementById('app')).render(<App items={[]} status={"asDASDA"} orderTitle={"Sdasda"} />);
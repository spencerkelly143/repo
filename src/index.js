import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Home } from "./Home.js"
import { About } from "./About.js"
import AddIcon from '@material-ui/icons/Add'
import './styling.css'
import { Sticky } from './Sticky.js'
import { ExampleStuckContent } from './ExampleStuckContent.js'
import $ from 'jquery';
import { Card } from './components/card.js'
import { TopCard } from './components/TopCard.js'
import Popper from 'popper.js'
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// import {Header} from "./components/Header.js";
// import {Selector} from "./components/Selector.js";
// let sides = {
//   top: 2000,
//   bottom: 1000,
//   left: 0,
//   right: 0
// }
function App() {
  const [click, setClick] = React.useState("Home");
    return(
      <div>
        <div className="first container-fluid">
          <div className=" withBorder row">
            <Sticky>
              <ExampleStuckContent>
                <div className="col">
                  <h1>Big title.</h1>
                </div>
                <div className="col">
                </div>
              </ExampleStuckContent>
            </Sticky>
          </div>
        </div>
      <div className=" second container-fluid">
        <div className="row">
          <div className="col">
            <TopCard id="left" col="firs"/>
          </div>
          <div className="col">
            <TopCard id="right" col="sec"/>
          </div>
          </div>
      </div>
      <div className="row">
      <nav className="navbar navbar-expand">
      <div className="floating card">
      </div>
      <div className="col">
        <div className="navigation" onClick={() => setClick("Home")}>
          Home
        </div>
        </div>
        <div className="col">
        <div className="navigation" onClick={() => setClick("About")}>
          About
        </div>
        </div>
      </nav>
      </div>
      {click==="Home" && (<Home />)}
      {click==="About" && (<About />)}
      </div>
    );

}
ReactDOM.render(<App />, document.getElementById('root'));

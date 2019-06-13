import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import AddIcon from '@material-ui/icons/Add'
import './styling.css'
import { Sticky } from './Sticky.js'
import { ExampleStuckContent } from './ExampleStuckContent.js'
import $ from 'jquery';
import { Card } from './components/card.js'
import { TopCard } from './components/TopCard.js'
import Popper from 'popper.js'
import ReactDOM from "react-dom";
import background from "./images/background.jpg"
import anime from "anime"
// import {Header} from "./components/Header.js";
// import {Selector} from "./components/Selector.js";
// let sides = {
//   top: 2000,
//   bottom: 1000,
//   left: 0,
//   right: 0
// }
export class App extends React.Component{
  render(){
    return(
    <div>
      <div className="first container-fluid">
        <div className=" withBorder row">
          <Sticky>
            <ExampleStuckContent>
              <div className="col">
                <h1>Big title.</h1>
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
      <div className="container-fluid">
      <Card _id="first" bar_id="firstBar"/>
      <Card _id="second" bar_id="secondBar"/>
      <Card _id="third" bar_id="thirdBar"/>
      </div>
      <div className="container-fluid">

      </div>
    </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('root'));

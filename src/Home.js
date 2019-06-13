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
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// import {Header} from "./components/Header.js";
// import {Selector} from "./components/Selector.js";
// let sides = {
//   top: 2000,
//   bottom: 1000,
//   left: 0,
//   right: 0
// }
export class Home extends React.Component{
  render(){
    return(

      <div className="container-fluid">
      <Card _id="first" bar_id="firstBar"/>
      <Card _id="second" bar_id="secondBar"/>
      <Card _id="third" bar_id="thirdBar"/>
      </div>
    );
  }
}

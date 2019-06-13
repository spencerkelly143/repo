import React from "react"
import ReactDOM from "react-dom";

import './cards.css'
import {Bar} from 'react-chartjs-2';
let data = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [{
      label: "My First dataset",
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [50, 10, 5, 2, 20, 30, 45],
      }]
  }
export class Card extends React.Component{
  handleClick = () => {
    const card = document.getElementById(this.props._id);
    const card_under = document.getElementById(this.props.bar_id);
    card.classList.toggle('is-open');
    card_under.classList.toggle('is-length');
    console.log(window.scrollY)
  }
  render(){
    return(
  <div className="row">
    <div className="col">
    <div className="shadow-lg card under" id={this.props.bar_id}>
      <div className="card-body">
        <p className="card-text" id="under_card_body">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
      </div>
    </div>
      <div className="shadow card" id={this.props._id} onClick={this.handleClick}>
        <div className="card-header">
        The Heading
        </div>
        <div className="card-body">
          <p className="card-text">This is card text It doesnt mean anything</p>
        </div>
      </div>
    </div>
  </div>
)
}
}

import React from "react";
import AddIcon from '@material-ui/icons/Add'
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/styles';
import "./TopCard.css"

export class TopCard extends React.Component{
  render(){
    return(
      <div className="cardWrapper" id={this.props.id}>
      <div className="shadow-lg Top card">
        <h1 className="card-text">
        "Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor
        </h1>
        <div className="AddWrapper">
        <Fab size="medium" data-toggle="collapse" data-target={`#${this.props.col}`} className="AddWrapper" aria-label="Add">
          <AddIcon className="AddButton"/>
        </Fab>
        </div>
        <div className="collapse" id={this.props.col}>
          <h3 className="card-text">
            hidden text
          </h3>
        </div>
        <div className="card-footer">
        footer
        </div>
      </div>
      </div>
    )
  }
};

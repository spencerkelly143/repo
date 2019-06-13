import React from 'react';

export class Selector extends React.Component{
  selecting = (e) => {
    console.log(e)
    this.props.action(e);
  }
  render(){
    return(
    <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {this.props.value}
        </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a className="dropdown-item" onClick={() => this.selecting} href="#" value="Heading 1">Heading 1</a>
        <a className="dropdown-item" onClick={() => this.selecting} href="#" value="Heading 2">Heading 2</a>
      </div>
    </div>
  );
}
}

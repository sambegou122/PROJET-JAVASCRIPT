
import React from 'react';

import '../assets/style/doneButton.css';

/*
 define root component
*/
export default class doneButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(e){
    e.preventDefault();
    this.props.handleDoneButton(e);
  }



  render() {

    return (
      <div className="doneButton" onClick={this.handleClick}>✔
      </div>
    );
  }
}

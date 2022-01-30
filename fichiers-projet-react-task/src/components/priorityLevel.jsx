

import React from 'react';

import '../assets/style/priorityLevel.css';

/*
 define root component
*/
export default class PriorityLevel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {on : false};
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    
    this.setState({
      on : this.props.on
    })
  }

  handleClick(event) {
   event.preventDefault();
   this.setState({on:(!this.state.on)})
   this.props.onClick(this.props.value);
 }

  render() {
    const on = this.props.on ? "on":"off";

    return (
      <div className="level" onClick = {this.handleClick}>
        <div className={on}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>

      </div>
    );
  }
}

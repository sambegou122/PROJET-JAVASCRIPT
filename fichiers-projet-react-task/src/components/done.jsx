import React from 'react';

import '../assets/style/tasklist.css';


/*
 define root component
*/
export default class Done extends React.Component {
  constructor(props) {
    super(props);
    this.state = {show :false}
    this.showTaskDone = this.showTaskDone.bind(this);
  }

  showTaskDone(e){
    e.preventDefault();
    if(this.state.show){
      this.setState({show : false})
    }
    else{

      this.setState({show : true})
    }
  }

  render() {
    const l = [];
    const task = this.props.list;
    const taille = this.props.list.length;
    const plus = '+'+taille;
    return (
      <div className="tasklist">

        Tâches terminées <input type = "submit" onClick = {this.showTaskDone} value={this.state.show?  "-" :  plus}/>
        <div className = "info">
        {this.state.show?  task : l }</div>
      </div>
    );
  }
}

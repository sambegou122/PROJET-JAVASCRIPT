import React from 'react';

import '../assets/style/addtask.css';


/*
 define root component
*/
export default class Addtask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      duree : this.props.duree,
      desc : this.props.desc
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);

  }

  handleClick(){
    this.props.addingTask(this.state.desc, this.state.duree);
    this.setState({
      duree : 0,
      desc : ""
    });
  }

  handleTextChange(e){
    this.setState({
      desc : e.target.value
    })
  }

  handleTimeChange(e){
    this.setState({
      duree : e.target.value
    })
  }


  render() {
    return (
      <div className="addTask">
        <input type="text" placeholder="Nouvelle tâche à ajouter" onChange = {this.handleTextChange} value={this.state.desc}/>
        <input type="number" min="0" onChange = {this.handleTimeChange} value={this.state.duree}/>mn
        <button onClick = {this.handleClick}>add</button>
      </div>
    );
  }
}

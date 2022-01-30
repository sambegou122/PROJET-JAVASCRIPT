


import React from 'react';

import '../assets/style/priorityScale.css';
import PriorityLevel from './priorityLevel.jsx';

/*
 define root component
*/
export default class PriorityScale extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mylevel : [],
      level :  1 ,
      nblevels : 6
    };
    this.handleChangeLevel = this.handleChangeLevel.bind(this);
  }

  componentDidMount(){
    this.setState({
      mylevel : [
        <PriorityLevel key ={1} on = {1<=this.state.level} onClick = {this.handleChangeLevel} value = "1"/>,
        <PriorityLevel key ={2} on = {2<=this.state.level} onClick = {this.handleChangeLevel} value = "2"/>,
        <PriorityLevel key ={3} on = {3<=this.state.level} onClick = {this.handleChangeLevel} value = "3"/>,
        <PriorityLevel key ={4} on = {4<=this.state.level} onClick = {this.handleChangeLevel} value = "4"/>,
        <PriorityLevel key ={5} on = {5<=this.state.level} onClick = {this.handleChangeLevel} value = "5"/>,
        <PriorityLevel key ={6} on = {6<=this.state.level} onClick = {this.handleChangeLevel} value = "6"/>
      ]
    });
  }

  handleChangeLevel(newlevel){
    this.setState({level:newlevel,
      mylevel : [
      <PriorityLevel key ={1} on = {1<=newlevel} onClick = {this.handleChangeLevel} value = "1"/>,
      <PriorityLevel key ={2} on = {2<=newlevel} onClick = {this.handleChangeLevel} value = "2"/>,
      <PriorityLevel key ={3} on = {3<=newlevel} onClick = {this.handleChangeLevel} value = "3"/>,
      <PriorityLevel key ={4} on = {4<=newlevel} onClick = {this.handleChangeLevel} value = "4"/>,
      <PriorityLevel key ={5} on = {5<=newlevel} onClick = {this.handleChangeLevel} value = "5"/>,
      <PriorityLevel key ={6} on = {6<=newlevel} onClick = {this.handleChangeLevel} value = "6"/>
  ]} 
  );
  this.props.handlePrio(newlevel);
  }

  render() {
    return (
      <div className="scale">
      {this.state.mylevel}

      </div>
    );
  }
}

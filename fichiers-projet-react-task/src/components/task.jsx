import React from 'react';

import TaskApp from './taskApp.jsx';
import PriorityScale from './priorityScale.jsx'
import DoneButton from './doneButton.jsx';

import '../assets/style/task.css';
/*
 define root component
*/
export default class Task extends React.Component {
  constructor(props) {
    super(props);

    this.handlePrio = this.handlePrio.bind(this);
    this.handleDoneButton = this.handleDoneButton.bind(this);
  }

  handlePrio(n){
    this.props.taskPriorityChange(this.props.id,n);
  };

  handleDoneButton(e){
    e.preventDefault();
    this.props.taskDone(this.props.id);
  }

  render() {
    const todo = [<PriorityScale handlePrio = {this.handlePrio}/>,
                  <DoneButton handleDoneButton={this.handleDoneButton}/>];
    const done = <div>(priorité : {this.props.priority})</div>;
    return (
      <div className="task">
        {this.props.description}
        ({this.props.duree} mn)&nbsp;
          {this.props.done ? done : todo}

      </div>
    );
  }
}

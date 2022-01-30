import React from 'react';

import Task from './task.jsx';

import '../assets/style/tasklist.css';


/*
 define root component
*/
export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter : ""
    };
    this.changeFilter = this.changeFilter.bind(this);
  }

  changeFilter(event){
    event.preventDefault();
    this.setState({filter : event.target.value});
  }


  render() {
    const filtered = this.props.list.filter(task => task.props.description.includes(this.state.filter.toLowerCase()));
    return (

      <div className="tasklist">
        <h3>
          Tâches en cours
        </h3>
        <form >
          <input type="text" className="input" placeholder="filtre" onChange={this.changeFilter}/>
        </form>
        <div className = "info">
        {filtered}</div>
      </div>
    );
  }
}

import React from 'react';

import '../assets/style/taskApp.css';

import Addtask from './addtask.jsx';

import Todo from './todo.jsx';

import Done from './done.jsx';

import Task from './task.jsx';

import tasks from '../data/tasksData.js';
/*
 define root component
*/
export default class TaskApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      TodoList : [],
      DoneList : []

    };
    this.addingTask = this.addingTask.bind(this);
    this.taskPriorityChange = this.taskPriorityChange.bind(this);
    this.taskDone = this.taskDone.bind(this);
  }

  componentDidMount(){
    const tache = tasks.map(
      task => <Task description={task.description} duree = {task.duration} id = {task.id} key = {task.id} priority = {1} taskPriorityChange={this.taskPriorityChange} done={false} taskDone={this.taskDone}/>
    );
    this.setState({
      TodoList : tache
    });
  }


  taskPriorityChange(id, n){
    const newTodoList = this.state.TodoList.filter(task => task.props.id !== id);
    const change = this.state.TodoList.find(task => task.props.id === id);
    const newEle =  <Task description={change.props.description} duree = {change.props.duree} id = {change.props.id} key = {change.props.id} priority = {n} taskPriorityChange={this.taskPriorityChange} done={false} taskDone={this.taskDone}/>
    newTodoList.push(newEle);
    const tri = newTodoList.sort((a,b) => a.props.priority < b.props.priority);
    this.setState({
      TodoList : tri
    });
  }

  taskDone(key){
    const newTodoList = this.state.TodoList.filter(task => task.props.id !==key);
    const newDoneList = this.state.DoneList;
    const eleDone = this.state.TodoList.find(task => task.props.id === key);
    const ele = <Task description={eleDone.props.description} duree = {eleDone.props.duree} id = {eleDone.props.id} key = {eleDone.props.id} priority = {eleDone.props.priority} taskPriorityChange={this.taskPriorityChange} done = {true} taskDone={this.taskDone}/>
    newDoneList.push(ele);
    this.setState({
      TodoList : newTodoList,
      DoneList : newDoneList
    });
  }

  addingTask(desc, time){
    const update = this.state.TodoList;
    update.push(<Task description={desc} duree = {time} id = {'T'+(update.length+1+this.state.DoneList.length)} key = {'T'+(update.length+1+this.state.DoneList.length)} priority = {1} taskPriorityChange={this.taskPriorityChange} done={false} taskDone={this.taskDone}/>);
    this.setState((state,props) =>({TodoList : update}));
  }

  render() {
    return (
      <div className="taskApp">
        <Addtask addingTask = {this.addingTask} desc = "" duree = "0"/>
        <Todo list = {this.state.TodoList} />
        <Done list = {this.state.DoneList} />
      </div>
    );
  }
}

import React from 'react';

var task;
var isCompleted;
var createTask; // Create event listner

export default class TodoListItem extends React.Component {
	constructor (props) {
		super(props);
		this.task = props.task;
		this.isCompleted = props.isCompleted;
		this.createTask = props.onCreate;
	}
	render() {
		return (
			<div>
				<div>{this.task}&nbsp;&nbsp;
				<button onClick={this.onEditClick.bind(this)}>Edit</button>&nbsp;&nbsp;
				<button>Delete</button></div>
			</div>
		)
	}

	onEditClick(event) {
		event.preventDefault();
		//console.log(this.createTask);
		this.createTask(this.task);
	}
}
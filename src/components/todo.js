import React from 'react';

var task;
var isCompleted;
var createTask; // Create event listner

export default class Todo extends React.Component {
	constructor (props) {
		super(props);
		console.log('In todo: ', props);
		this.task = props.task;
		this.isCompleted = props.isCompleted;
		this.createTask = props.onRemove;
		this.removeTask = props.onRemove;
	}
	render() {
		return (
			<div>
				{isCompleted ? [X] : [ ]}
				{this.task}&nbsp;&nbsp;
				<a href="#" onClick={::this.onEditClick}>Edit</a>
				<span>&nbsp;&nbsp;</span>
				<a href="#" onClick={::this.onRemoveClick}>Delete</a>
			</div>
		)
	}
	onEditClick(event) {
		event.preventDefault();
		this.createTask(this.task);
	}
	onRemoveClick(event) {
		event.preventDefault();
		this.removeTask(this.task);		
	}
}
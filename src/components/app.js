import React from 'react';
import TodosList from './todos-list';

const todos = [
	{
		task: "Make React app",
		isCompleted: false
	},
	{
		task: "Eat dinner",
		isCompleted: true
	}
];

export default class App extends React.Component {

	constructor (props) {
		super(props);
		this.state = { todos }; 
	}

	render () {
		return (
			<div>
				<h2>Todos Application</h2>
				<TodosList todos = {this.state.todos}></TodosList>
			</div>
		);
	}
}
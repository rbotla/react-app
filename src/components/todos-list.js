import React from 'react';
import TodoListItem from './todo-list-item';

export default class TodosList extends React.Component {
	render () {
		console.log(this.props);

		return (
			<div>
				<hr/>
				<h3>React Todos</h3>
				<ul>
				{this.props.todos.map((x, i) => <li key={i}><TodoListItem onCreate = {this.onCreateTask.bind(this)} key={i} {...x}/></li>)}
				</ul>
			</div>
		);
	}

	onCreateTask(task) {
		console.log('From todos-list event listener: ', task);
	}
}
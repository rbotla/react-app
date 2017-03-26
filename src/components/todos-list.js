import React from 'react';
import Todo from './todo';
import addItem from '../store/actions/add-item';
import removeItem from '../store/actions/remove-item';
import { connect } from 'react-redux';

export class TodosList extends React.Component {
	constructor(props) {
		super(props);
		this.state = { // Does "this" state indicate this component's state?
			task: '',
		}
	}

	render () {

		// Expecting onAdd listener, onRemove listener and list of todos to be passed
		const {
			onAdd,
			onRemove,
			todos // Question: Why is this assigned to a null array? Ain't we looking for the list to be sent across?
		} = this.props;

		const { value } = this.state;  // copy state's value to value variable
		return (
			<div>
				<hr/>
				<h3>React Todos</h3>

        <form onSubmit={::this._onSubmit}>
          <label htmlFor="add-todo">Add a new item:</label>
          <input ref="input" id="add-todo" value={value} onChange={::this._onChange} />
          <button type="submit">Add</button>
        </form>
        <ul>
        { 
        	todos.length
          ?
						todos.map(
							(x, i) => 
								<li key={i}>
									<Todo key={i} onRemove = {onRemove} {...x}/>
								</li>
						)
          :
          <p>You have no todos.</p>
        }
        </ul>
			</div>
		);
	}

  _focus () {
    this.refs.input.focus();
  }

  _onChange ({ target: { value } }) {
    this.setState({ value });
  }

  _onSubmit ( e ) {
    e.preventDefault();
    this.props.onAdd( this.state.value ); // This is an asynchronous call
    this.setState({ value: '' }); // resetting component level state value to blank to get the next value
    this._focus();
  }
}

export const mapStateToProps = ({ todos }) => {
	return { todos };
};

export const mapDispatchToProps = dispatch => ({
  onAdd: v => dispatch( addItem( v ) ),
  onRemove: todo => dispatch( removeItem( todo ) )
});

export default connect( mapStateToProps, mapDispatchToProps )( TodosList );

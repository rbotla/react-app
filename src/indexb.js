import Redux from 'redux';
import { createStore } from 'redux';

const initialstate = {
	todos: [],
	user: {
		username: 'josh',
		auth: []
	}
}

const reducer = (state, action) => {
	switch ( action.type ) {
		case 'ADD_TODO':
			return {
				...state,
				todos: [...state.todos, ...action.text ],
			};

		default:
			return state;
	}
};


const store = createStore(reducer, initialstate);

const addTodo = ( ...text ) => ({
	type: 'ADD_TODO',
	text: [...text]
});

function invokeMe() {
	const { todos } = store.getState();
	console.log('todos: ' + todos.length);
}

invokeMe();

store.subscribe( invokeMe );

store.dispatch(addTodo('Sleep'));

store.dispatch(addTodo('Learn Redux', 'Dream', 'Date'));

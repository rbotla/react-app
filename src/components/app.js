import React from 'react';
import TodosList from './todos-list';
import InitiativeHome from './initiative-home'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../store/reducers';

const initialState = {};

const store = createStore(
	reducers, /* preloadedState, */
	initialState
+  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default class App extends React.Component {

	constructor (props) {
		super(props);
	}

	render () {
		return (
			<div>
			  <Provider store={store}>
			  	<div class="container">
						<InitiativeHome/>
					</div>
			  </Provider>
			</div>
		);
	}
}
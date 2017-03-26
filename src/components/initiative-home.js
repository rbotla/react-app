import React from 'react';
import { connect } from 'react-redux';
import InitiativeList from './initiative-list'
import getEpics from '../store/actions/get-epics';
import getTasks from '../store/actions/get-tasks';

export class InitiativeHome extends React.Component {
	constructor (props) {
		super (props);
	}

	render() {
		const { initiatives = [],
						epics = [],
						tasks = []
						} = this.props.initiatives;
		const {
			onInitiativeClick = e => e,
			onEpicClick = e => e
		} = this.props;

		const initiativeName = "Revenue Recognition";
		return (
			<div>
				<div class="page-header">
				  <h1>{initiativeName}</h1>
				</div>
				<div class="row">
					<div class="col-md-4">
						<div class="panel panel-primary">
						  <div class="panel-heading">
						    <h3 class="panel-title">Initiatives</h3>
						  </div>
						  <div class="panel-body">
									<InitiativeList initiatives={initiatives} onInitiativeClick={onInitiativeClick}/>
						  </div>
						</div>
					</div>
					<div class="col-md-4">
						<div class="panel panel-success">
						  <div class="panel-heading">
						    <h3 class="panel-title">Epics</h3>
						  </div>
						  <div class="panel-body">
									<EpicList epics={epics} onEpicClick={onEpicClick}/>
						  </div>
						</div>
					</div>
					<div class="col-md-4">
						<div class="panel panel-info">
						  <div class="panel-heading">
						    <h3 class="panel-title">Tasks</h3>
						  </div>
						  <div class="panel-body">
						  		<TaskList tasks={tasks}/>
						  </div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

// Epics List
export const EpicList = ({ epics, onEpicClick }) => {
	return (
		<div class="list-group">
			{
				epics.map( (epic, key) => {
					return (
						<button key={key} type="button" onClick={(e) => onEpicClick(epic.id)}  class="list-group-item">
							{epic.name}
						</button>
					)
				})
			}
		</div>
	);
}

// Task List
export const TaskList = ({ tasks }) => {
	return (
		<div class="list-group">
			{
				tasks.map( (task, key) => {
					return (
						<button key={key} type="button" class="list-group-item">
							{task.title}
						</button>
					)
				})
			}
		</div>
	);
}

// This function is used by 
export const mapStateToProps = ( state ) => ( { initiatives: state.initiatives } );

export const mapDispatchToProps = (dispatch) => ({
  onInitiativeClick: v => dispatch( getEpics( v ) ),
  onEpicClick: v => dispatch( getTasks( v ) )
});

export default connect (mapStateToProps, mapDispatchToProps) (InitiativeHome);
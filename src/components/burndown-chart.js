import React from 'react';

// Currently support weekly burndown chart
export class BurndownChart extends React.Component {
	constructor (props) {
		super(props);

		// Isn't LIFE much easier with a team?
		// BurndownChart component is dumb - gets data from outside along with configuration options
		this.data = {
			info: {
				title: "CRM Datacleanup - Burndown Chart",
			},
			work: [
				{id: "1234", title: "Identify customer data gap scenarios - RTD vs CRM Rev Map", type: "Task", estimate: 12, completeBy: "3/30/2017", status: "In Progress", remaining: 12, completedDate=""},
				{id: "1235", title: "Handover scenarios to Cory Grisham", type: "Task", estimate: 12, completeBy: "3/30/2017", status: "In Progress", remaining: 12, completedDate=""},
				{id: "1236", title: "Train Clarity team on CRM and RTD datamodels", type: "Task", estimate: 12, completeBy: "3/30/2017", status: "In Progress", remaining: 12, completedDate=""},
				{id: "1237", title: "Review account mappings", type: "Task", estimate: 12, completeBy: "3/30/2017", status: "In Progress", remaining: 12, completedDate=""},
				{id: "1238", title: "Execute data cleanup", type: "Task", estimate: 12, completeBy: "3/30/2017", status: "In Progress", remaining: 12, completedDate=""},
			]
		};

		render () {
			return (

			)
		}
}

export mapStateToProps = () => ();
export mapDispatchToProps = (dispatch) => {(

)}

export default connect(mapStateToProps, mapDispatchToProps);
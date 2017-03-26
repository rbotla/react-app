export default ( initiatives = {initiatives: initialInitiatives}, { type, ...payload } ) => {
  switch ( type ) {
    case 'INITIATIVE_CLICKED':
    	const { initiativeId } = payload;
     	const filteredInitiatives = initiatives.initiatives.filter( i => ( i.id == initiativeId) );
    	return {...initiatives, 
    					epics: filteredInitiatives[0].epics,
    					currentInitiative: filteredInitiatives[0],
    					tasks: []
    				};
      break;

    case 'EPIC_CLICKED':
    	const { epicId } = payload;
     	const epics = initiatives.currentInitiative.epics;
     	const epic = epics.filter( i => ( i.id == epicId) );
    	return {...initiatives, 
    					tasks: epic[0].tasks};
      break;
  }
  return initiatives;
};

const initialInitiatives =
[
	{
		id: "1234",
		initiative: "Revenue recognition", 
		epics: [
			{
				id: "1234",
				name: "CRM Datacleanup - Burndown Chart", owner: "Keith W", 
				tasks: [
					{id: "1234", title: "Identify customer data gap scenarios - RTD vs CRM Rev Map", type: "Task", estimate: 12, completeBy: "3/30/2017", status: "In Progress", remaining: 12, completedDate:""},
					{id: "1235", title: "Handover scenarios to Cory Grisham", type: "Task", estimate: 12, completeBy: "3/30/2017", status: "In Progress", remaining: 12, completedDate:""},
					{id: "1236", title: "Train Clarity team on CRM and RTD datamodels", type: "Task", estimate: 12, completeBy: "3/30/2017", status: "In Progress", remaining: 12, completedDate:""},
					{id: "1237", title: "Review account mappings", type: "Task", estimate: 12, completeBy: "3/30/2017", status: "In Progress", remaining: 12, completedDate:""},
					{id: "1238", title: "Execute data cleanup", type: "Task", estimate: 12, completeBy: "3/30/2017", status: "In Progress", remaining: 12, completedDate:""},
				]
			},
			{
				id: "1235",
				name: "Customer 360", owner: "Holt Z", 
				tasks: [
					{id: "1239", title: "Design C360 datamodel", type: "Task", estimate: 12, completeBy: "3/30/2017", status: "In Progress", remaining: 12, completedDate:""},
					{id: "1240", title: "Build ETL to load implementation data from Siebel", type: "Task", estimate: 12, completeBy: "3/30/2017", status: "In Progress", remaining: 12, completedDate:""},
					{id: "1241", title: "Build ETL to load implementation data from Salesforce service cloud", type: "Task", estimate: 12, completeBy: "3/30/2017", status: "In Progress", remaining: 12, completedDate:""},
					{id: "1242", title: "Build ETL to load contract data from Apptus CLM", type: "Task", estimate: 12, completeBy: "3/30/2017", status: "In Progress", remaining: 12, completedDate:""},
					{id: "1243", title: "Build ETL to load Account data from Salesforce CRM", type: "Task", estimate: 12, completeBy: "3/30/2017", status: "In Progress", remaining: 12, completedDate:""},
					{id: "1244", title: "Implement SSP calculator", type: "Task", estimate: 12, completeBy: "3/30/2017", status: "In Progress", remaining: 12, completedDate:""},
				]
			},
		]
	},
	{
		id: "1235",
		initiative: "CPQ Implementation", 
		epics: [
			{
				id: "1236",
				name: "CPQ software evaluation", owner: "Keith Weinheimmer", 
				tasks: [
					{id: "1234", title: "Identify customer data gap scenarios - RTD vs CRM Rev Map", type: "Task", estimate: 12, completeBy: "3/30/2017", status: "In Progress", remaining: 12, completedDate:""},
					{id: "1235", title: "Handover scenarios to Cory Grisham", type: "Task", estimate: 12, completeBy: "3/30/2017", status: "In Progress", remaining: 12, completedDate:""},
					{id: "1236", title: "Train Clarity team on CRM and RTD datamodels", type: "Task", estimate: 12, completeBy: "3/30/2017", status: "In Progress", remaining: 12, completedDate:""},
					{id: "1237", title: "Review account mappings", type: "Task", estimate: 12, completeBy: "3/30/2017", status: "In Progress", remaining: 12, completedDate:""},
					{id: "1238", title: "Execute data cleanup", type: "Task", estimate: 12, completeBy: "3/30/2017", status: "In Progress", remaining: 12, completedDate:""},
				]
			},
			{
				id: "1237",
				name: "CPQ Design", owner: "Dean Quach", 
				tasks: [
					{id: "1239", title: "Design C360 datamodel", type: "Task", estimate: 12, completeBy: "3/30/2017", status: "In Progress", remaining: 12, completedDate:""},
					{id: "1240", title: "Build ETL to load implementation data from Siebel", type: "Task", estimate: 12, completeBy: "3/30/2017", status: "In Progress", remaining: 12, completedDate:""},
					{id: "1241", title: "Build ETL to load implementation data from Salesforce service cloud", type: "Task", estimate: 12, completeBy: "3/30/2017", status: "In Progress", remaining: 12, completedDate:""},
					{id: "1242", title: "Build ETL to load contract data from Apptus CLM", type: "Task", estimate: 12, completeBy: "3/30/2017", status: "In Progress", remaining: 12, completedDate:""},
					{id: "1243", title: "Build ETL to load Account data from Salesforce CRM", type: "Task", estimate: 12, completeBy: "3/30/2017", status: "In Progress", remaining: 12, completedDate:""},
					{id: "1244", title: "Implement SSP calculator", type: "Task", estimate: 12, completeBy: "3/30/2017", status: "In Progress", remaining: 12, completedDate:""},
				]
			},
			{
				id: "1238",
				name: "Quotation templates design", owner: "Heather Mcintosh", 
				tasks: [
					{id: "1239", title: "Design C360 datamodel", type: "Task", estimate: 12, completeBy: "3/30/2017", status: "In Progress", remaining: 12, completedDate:""},
					{id: "1240", title: "Build ETL to load implementation data from Siebel", type: "Task", estimate: 12, completeBy: "3/30/2017", status: "In Progress", remaining: 12, completedDate:""},
					{id: "1241", title: "Build ETL to load implementation data from Salesforce service cloud", type: "Task", estimate: 12, completeBy: "3/30/2017", status: "In Progress", remaining: 12, completedDate:""},
					{id: "1242", title: "Build ETL to load contract data from Apptus CLM", type: "Task", estimate: 12, completeBy: "3/30/2017", status: "In Progress", remaining: 12, completedDate:""},
					{id: "1243", title: "Build ETL to load Account data from Salesforce CRM", type: "Task", estimate: 12, completeBy: "3/30/2017", status: "In Progress", remaining: 12, completedDate:""},
					{id: "1244", title: "Implement SSP calculator", type: "Task", estimate: 12, completeBy: "3/30/2017", status: "In Progress", remaining: 12, completedDate:""},
				]
			},
		]
	},
];
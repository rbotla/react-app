import React from 'react';

export default ({	initiatives = [],	onInitiativeClick }) => {
  return (
			<div class="list-group">
				{
					initiatives.map( (initiative, key) => {
						const intName = initiative.initiative;
						const intId = initiative.id;
						return (
							<button key={key} onClick={(e) => onInitiativeClick(intId)} type="button" class="list-group-item">
								{intName}
							</button>
						)
					})
				}
			</div>
  )
}
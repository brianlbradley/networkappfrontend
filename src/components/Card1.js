import React from 'react';

const Card1 = (props,handleClick) => {

	return(
		
		<div onClick = {() => props.handleClick(props.id)}>

		<div>
		 	<h1>{props.name} Suggests:</h1>
		 	
		 	
		 </div>
		
		</div>

		)
}

export default Card1;
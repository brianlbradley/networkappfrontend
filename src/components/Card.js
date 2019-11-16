import React from 'react';

const Card = (props) => {

	return(
		<div className = 'pointer bg-light-green dib br3 pa3 ma2 grow  shadow-5'
		onClick = {() => props.handleClick(props.id)}>

		<div>
		 	<h3>{props.name}</h3>
		 	<p>{props.company}</p> 
		 	<p>{props.phone}</p>
		 	<p>{props.email}</p>
		 	<p>{props.city}</p> 
		 	
		 </div>
		 <div> 
			My Network
			<input className ="largeCheckbox"
				type = "checkbox"
			 	checked={props.ischecked}
			 	onChange={()=> props.handleChange(props.id)}
				 	/> 
			</div> 
		 </div>	

		)
}

export default Card;
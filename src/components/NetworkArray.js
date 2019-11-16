import React from 'react';
import Card from './Card';

const NetworkArray = ({network,handleChange,handleClick}) => {
	const cardComponent = network.map((user,i) => {
		return(
		<Card 
			key = {network[i].id}
			name = {network[i].firstname + ' ' + network[i].lastname} 
			company = {network[i].company}
			phone= {network[i].phone}
			email={network[i].email}
			city = {network[i].city}
			ischecked= {network[i].ischecked}
			handleChange={handleChange}
			handleClick ={handleClick}
			id={network[i].id}

			/>

					)
	})
		return ( 
				<div> 
					
				 {cardComponent}

					
				</div> 
			)
}

export default NetworkArray;
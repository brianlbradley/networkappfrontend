import React from 'react';
import Card from './Card';


const MyNetworkArray = ({network,handleChange,handleClick}) => {
	const cardComponent = network.map((user,i) => {
		
		return(
			user.ischecked === true ?
		<Card 
			key = {network[i].id}
			name = {network[i].firstname + ' ' + network[i].lastname} 
			company = {network[i].company}
			phone= {network[i].phone}
			email={network[i].email}
			city = {network[i].city}
			handleChange={handleChange}
			handleClick={handleClick}
			ischecked = {network[i].ischecked}
			id = {network[i].id}
			/> :null
					)
	})
		return ( 
				<div> 
					
				 {cardComponent}
					
				</div> 
			)
}

export default MyNetworkArray;
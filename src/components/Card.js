import React,{useState} from 'react';

const onUpdateCB = (ischecked,loginuser,userid) => {
	console.log(ischecked,loginuser,userid)
  
    fetch("http://localhost:3000/cb", {

      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        loginuser,
        userid,
        ischecked: !ischecked
      })
    })
      .then(response => response.json())
     /*
      .then(email => {
        debugger;
        if (email.email.email === props.email) {
          console.log(!ischecked);
          setIsChecked(!ischecked);

        }
      });*/
     
  };

const Card = (props) => {
	const [isChecked,setisChecked]=useState(props.ischecked);
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
			 	checked={isChecked}
			 	onChange={()=> onUpdateCB(!isChecked,props.loginuser.id,props.id)}
				 	/> 
			</div> 
		 </div>	

		)
}

export default Card;
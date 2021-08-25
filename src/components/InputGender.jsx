import React, { useState } from "react";

function InputGender(props) {
  const [inputGender, setInputGender] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInputGender(newValue);
  }
  let inputGender=["Male","Female"];
  
  return (
	<div>
		<center>
		{inputGender.map(result=>(
			<>
			<input type="radio" value={inputGender} name="radiovalues"  onChange={handleChange} />
			<b> {result} </b>
			</>
			))}
			</center>
	</div>

  );
}

export default InputGender;
